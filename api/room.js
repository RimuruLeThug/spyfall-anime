// API des salons : GET pour lire l'état, POST pour agir.
const { cmd, configured, CAS } = require("./_redis.js");
const game = require("./_game.js");

const TTL = 6 * 60 * 60; // un salon vit 6 h après sa dernière action
const key = (code) => "spyfall:room:" + code;

function cleanCode(raw) {
  const code = String(raw || "").toUpperCase().replace(/[^A-Z]/g, "");
  if (code.length !== 4) throw new game.GameError(400, "Le code fait 4 lettres, par exemple NEKO.");
  return code;
}

async function load(code) {
  const raw = await cmd("GET", key(code));
  if (!raw) throw new game.GameError(404, "Ce salon n'existe pas ou a expiré. Vérifie le code.");
  return { raw, room: JSON.parse(raw) };
}

// Lecture, modification, puis écriture seulement si personne n'a écrit entre-temps.
async function update(code, change) {
  for (let attempt = 0; attempt < 8; attempt++) {
    const { raw, room } = await load(code);
    const result = change(room);
    room.updatedAt = Date.now();
    const ok = await cmd("EVAL", CAS, "1", key(code), raw, JSON.stringify(room), String(TTL));
    if (Number(ok) === 1) return { room, result };
  }
  throw new game.GameError(503, "Trop d'actions en même temps. Réessaie.");
}

async function readBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") return JSON.parse(req.body || "{}");
  const chunks = [];
  for await (const c of req) chunks.push(c);
  const text = Buffer.concat(chunks).toString("utf8");
  return text ? JSON.parse(text) : {};
}

function send(res, status, data) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(data));
}

async function handle(req) {
  if (!configured()) throw new game.GameError(503, "La base de données du jeu n'est pas encore branchée.");

  if (req.method === "GET") {
    const q = new URL(req.url, "http://x").searchParams;
    const { room } = await load(cleanCode(q.get("code")));
    let viewer = null;
    if (q.get("id")) viewer = game.findPlayer(room, q.get("id"), q.get("secret"));
    return game.view(room, viewer);
  }

  if (req.method !== "POST") throw new game.GameError(405, "Méthode non gérée.");
  const body = await readBody(req);
  const action = body.action;

  if (action === "create") {
    for (let i = 0; i < 10; i++) {
      const code = game.randomCode();
      const { room, player } = game.newRoom(code, body.name, body.mask);
      room.updatedAt = Date.now();
      const ok = await cmd("SET", key(code), JSON.stringify(room), "NX", "EX", String(TTL));
      if (ok) return { id: player.id, secret: player.secret, state: game.view(room, player) };
    }
    throw new game.GameError(503, "Impossible de créer un salon. Réessaie.");
  }

  const code = cleanCode(body.code);

  if (action === "join") {
    const { room, result: player } = await update(code, (room) => {
      if (body.id && body.secret) {
        const back = room.players.find((p) => p.id === body.id && p.secret === body.secret);
        if (back) return back;
      }
      return game.join(room, body.name);
    });
    return { id: player.id, secret: player.secret, state: game.view(room, player) };
  }

  const { room } = await update(code, (room) => {
    const me = game.findPlayer(room, body.id, body.secret);
    switch (action) {
      case "leave": return game.leave(room, me);
      case "setMask": return game.setMask(room, me, body.mask);
      case "start": return game.start(room, me);
      case "ask": return game.ask(room, me, String(body.target || ""), body.question);
      case "answer": return game.answer(room, me, body.yes === true);
      case "skip": return game.skip(room, me);
      case "toVote": throw new game.GameError(409, "Le vote s'ouvre tout seul quand chacun a posé ses 2 questions.");
      case "vote": return game.vote(room, me, String(body.target || ""));
      case "guess": return game.guess(room, me, body.found);
      case "next": return game.next(room, me);
      case "lobby": return game.backToLobby(room, me);
      default: throw new game.GameError(400, "Action inconnue.");
    }
  });
  if (action === "leave") return { left: true };
  return { state: game.view(room, room.players.find((p) => p.id === body.id)) };
}

module.exports = async (req, res) => {
  try {
    send(res, 200, await handle(req));
  } catch (err) {
    if (err instanceof game.GameError) return send(res, err.status, { error: err.message });
    if (err instanceof SyntaxError) return send(res, 400, { error: "Requête illisible." });
    console.error(err);
    send(res, 500, { error: "Le serveur a eu un problème. Réessaie dans un instant." });
  }
};
