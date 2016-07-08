const xmm = require(".");

xmm({
	id: process.env.XMM,
	key: process.env[process.env.XMM]
}).on("xmm", update => console.log(update));
