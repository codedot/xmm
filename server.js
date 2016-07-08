const xmm = require(".");

const env = process.env;
const id = env.XMM;
const key = env[id];
const api = xmm(id, key);

api.on("xmm", console.log);
