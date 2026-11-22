// Règles d'un salon Spyfall Anime. Tout est pur : les fonctions reçoivent le salon et le modifient.
const crypto = require("crypto");
const cards = require("../cards.js");

const MIN_PLAYERS = 3;
const MAX_PLAYERS = 5;
const LETTERS = "ABCDEFGHJKLMNPRSTUVWXYZ";

class GameError extends Error {
  constructor(status, message) { super(message); this.status = status; }
}

function randomCode() {
  let code = "";
  for (let i = 0; i < 4; i++) code += LETTERS[crypto.randomInt(LETTERS.length)];
  return code;
}
function token(bytes) { return crypto.randomBytes(bytes).toString("hex"); }

function cleanName(raw) {
  const name = String(raw || "").replace(/[\u0000-\u001f\u007f<>]/g, "").replace(/\s+/g, " ").trim().slice(0, 20);
  if (!name) throw new GameError(400, "Choisis un pseudo.");
  return name;
}
function cleanMask(raw) {
  const mask = Number(raw);
  if (!Number.isInteger(mask) || mask < 1 || mask > cards.FULL) throw new GameError(400, "Coche au moins un animé.");
  return mask;
}

function newRoom(code, name, mask) {
  const host = { id: token(6), secret: token(16), name: cleanName(name) };
  const room = {
    v: 1, code, seed: token(16), mask: cleanMask(mask), createdAt: Date.now(),
    hostId: host.id, players: [host], status: "lobby", round: 0, phase: "talk",
    votes: {}, guess: null, history: {},
  };
  return { room, player: host };
}

function findPlayer(room, id, secret) {
  const p = room.players.find((x) => x.id === id);
  if (!p || p.secret !== secret) throw new GameError(403, "Tu ne fais pas partie de ce salon.");
  return p;
}

function join(room, name) {
  const clean = cleanName(name);
  if (room.status !== "lobby") throw new GameError(409, "La partie a déjà commencé. Demande à l'host de relancer un salon.");
  if (room.players.length >= MAX_PLAYERS) throw new GameError(409, "Le salon est plein (5 joueurs maximum).");
  if (room.players.some((p) => p.name.toLowerCase() === clean.toLowerCase())) throw new GameError(409, "Ce pseudo est déjà pris dans ce salon.");
  const player = { id: token(6), secret: token(16), name: clean };
  room.players.push(player);
  return player;
}

function leave(room, player) {
  if (room.status !== "lobby") throw new GameError(409, "On ne peut quitter le salon que dans la salle d'attente.");
  room.players = room.players.filter((p) => p.id !== player.id);
  if (room.hostId === player.id && room.players.length) room.hostId = room.players[0].id;
}

function requireHost(room, player) {
  if (room.hostId !== player.id) throw new GameError(403, "Seul l'host peut faire ça.");
}

function setMask(room, player, mask) {
  requireHost(room, player);
  if (room.status !== "lobby") throw new GameError(409, "La partie a déjà commencé.");
  room.mask = cleanMask(mask);
}

function start(room, player) {
  requireHost(room, player);
  if (room.status !== "lobby") throw new GameError(409, "La partie a déjà commencé.");
  if (room.players.length < MIN_PLAYERS) throw new GameError(409, "Il faut au moins 3 joueurs pour lancer.");
  room.status = "playing";
  room.round = 1;
  resetRound(room);
}

function resetRound(room) { room.phase = "talk"; room.votes = {}; room.guess = null; }

function deal(room) {
  const all = cards.pool(room.mask);
  const order = cards.shuffle(all, cards.rng(room.seed + "|ordre"));
  const target = order[(room.round - 1) % order.length];
  const r = cards.rng(room.seed + "|manche|" + room.round);
  const spy = room.players[Math.floor(r() * room.players.length)].id;
  const first = room.players[Math.floor(r() * room.players.length)].id;
  return { target, spy, first };
}

function tally(room) {
  const counts = {};
  Object.values(room.votes).forEach((t) => { if (t !== "none") counts[t] = (counts[t] || 0) + 1; });
  const n = room.players.length;
  const accused = Object.keys(counts).find((id) => counts[id] > n / 2) || null;
  return { counts, accused };
}

// Gagnant de la manche, ou null tant que l'espion démasqué n'a pas tenté sa chance.
function outcome(room) {
  if (room.phase !== "result") return null;
  const { spy } = deal(room);
  const { accused } = tally(room);
  if (accused !== spy) return "spy";
  if (room.guess === null) return null;
  return room.guess ? "spy" : "agents";
}

function record(room) {
  const w = outcome(room);
  if (w) room.history[room.round] = w;
}

function requirePlaying(room) {
  if (room.status !== "playing") throw new GameError(409, "La partie n'a pas commencé.");
}

function toVote(room) {
  requirePlaying(room);
  if (room.phase !== "talk") throw new GameError(409, "On n'est plus en discussion.");
  room.phase = "vote";
}

function backToTalk(room) {
  requirePlaying(room);
  if (room.phase !== "vote") throw new GameError(409, "On n'est pas au vote.");
  room.phase = "talk";
  room.votes = {};
}

function vote(room, player, target) {
  requirePlaying(room);
  if (room.phase !== "vote") throw new GameError(409, "Le vote n'est pas ouvert.");
  if (target !== "none") {
    if (target === player.id) throw new GameError(400, "Tu ne peux pas voter contre toi.");
    if (!room.players.some((p) => p.id === target)) throw new GameError(400, "Ce joueur n'est pas dans la partie.");
  }
  room.votes[player.id] = target;
  if (room.players.every((p) => room.votes[p.id])) {
    room.phase = "result";
    record(room);
  }
}

function guess(room, player, found) {
  requirePlaying(room);
  if (room.phase !== "result") throw new GameError(409, "Ce n'est pas le moment.");
  const { spy } = deal(room);
  if (tally(room).accused !== spy) throw new GameError(409, "L'espion n'a pas été démasqué.");
  if (room.guess !== null) throw new GameError(409, "Le résultat est déjà donné.");
  if (player.id === spy) throw new GameError(403, "L'espion ne juge pas sa propre réponse.");
  room.guess = Boolean(found);
  record(room);
}

function next(room, player) {
  requirePlaying(room);
  requireHost(room, player);
  if (room.phase !== "result" || !outcome(room)) throw new GameError(409, "La manche n'est pas terminée.");
  room.round += 1;
  resetRound(room);
}

function backToLobby(room, player) {
  requireHost(room, player);
  room.status = "lobby";
  room.round = 0;
  room.history = {};
  resetRound(room);
}

// Ce que voit un joueur : jamais les secrets, jamais la carte des autres, l'espion seulement au résultat.
function view(room, viewer) {
  const pub = {
    code: room.code, status: room.status, round: room.round, phase: room.phase, mask: room.mask,
    hostId: room.hostId, players: room.players.map((p) => ({ id: p.id, name: p.name })),
    minPlayers: MIN_PLAYERS, maxPlayers: MAX_PLAYERS, updatedAt: room.updatedAt || room.createdAt,
    score: { spy: 0, agents: 0 },
  };
  Object.values(room.history).forEach((w) => { pub.score[w] += 1; });
  if (viewer) pub.me = { id: viewer.id, name: viewer.name, isHost: viewer.id === room.hostId };
  if (room.status !== "playing") return pub;

  const d = deal(room);
  pub.first = d.first;
  pub.voted = Object.keys(room.votes);
  if (viewer) {
    pub.me.vote = room.votes[viewer.id] || null;
    pub.me.card = viewer.id === d.spy
      ? { spy: true, cat: d.target.cat }
      : { spy: false, cat: d.target.cat, name: d.target.name, anime: d.target.anime };
  }
  if (room.phase === "result") {
    const t = tally(room);
    pub.result = {
      spyId: d.spy, accusedId: t.accused, counts: t.counts, votes: room.votes,
      answer: { cat: d.target.cat, name: d.target.name, anime: d.target.anime },
      guess: room.guess, winner: outcome(room),
    };
  }
  return pub;
}

module.exports = {
  GameError, MIN_PLAYERS, MAX_PLAYERS, randomCode, newRoom, findPlayer, join, leave, setMask, start,
  toVote, backToTalk, vote, guess, next, backToLobby, view, deal, tally, outcome,
};
