// Accès Redis (Upstash REST). En local, SPYFALL_MEMORY=1 remplace Redis par une Map pour les tests.
const URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

// Compare-and-set : n'écrit que si la valeur n'a pas changé depuis la lecture.
const CAS = "if redis.call('GET',KEYS[1])==ARGV[1] then redis.call('SET',KEYS[1],ARGV[2],'EX',ARGV[3]) return 1 else return 0 end";

const memory = new Map();
function memoryCmd(args) {
  const [name, ...rest] = args;
  const op = String(name).toUpperCase();
  if (op === "GET") return memory.has(rest[0]) ? memory.get(rest[0]) : null;
  if (op === "SET") {
    const [key, value, ...opts] = rest;
    if (opts.map(String).map((o) => o.toUpperCase()).includes("NX") && memory.has(key)) return null;
    memory.set(key, value);
    return "OK";
  }
  if (op === "DEL") return memory.delete(rest[0]) ? 1 : 0;
  if (op === "EVAL") {
    const [, , key, oldValue, newValue] = rest;
    if (memory.get(key) === oldValue) { memory.set(key, newValue); return 1; }
    return 0;
  }
  throw new Error("Commande non simulée : " + op);
}

function configured() {
  return process.env.SPYFALL_MEMORY === "1" || Boolean(URL && TOKEN);
}

async function cmd(...args) {
  if (process.env.SPYFALL_MEMORY === "1") return memoryCmd(args);
  const res = await fetch(URL, {
    method: "POST",
    headers: { Authorization: "Bearer " + TOKEN, "Content-Type": "application/json" },
    body: JSON.stringify(args),
  });
  const data = await res.json();
  if (data.error) throw new Error("Redis : " + data.error);
  return data.result;
}

module.exports = { cmd, configured, CAS };
