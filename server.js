const xmm = require(".");

const env = process.env;
const id = env.XMM;
const key = env[id];

console.log(id, key);

xmm(id, balances => {
	console.log(JSON.stringify(balances, null, 2));
	process.exit();
});
