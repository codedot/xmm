const xmm = require(".");

const env = process.env;
const id = env.XMM;
const key = env[id];

xmm({
	id: id,
	key: key
}).on("xmm", update => {
	console.info(update);
});
