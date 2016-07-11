const xmm = require(".");

const env = process.env;
const id = env.XMM;
const key = env[id];

console.info(id);

xmm({
	id: id,
	key: key,
	delta: 0.01,
	deadline: 0
}).on("xmm", update => {
	console.info(update.prices);
	process.exit();
});
