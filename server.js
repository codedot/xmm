const xmm = require(".");

const env = process.env;
const id = env.XMM;
const key = env[id];

xmm.check(id).then(state => {
	console.log(state);
	process.exit();
});
