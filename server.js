const xmm = require(".");

var env = process.env;
var id = env.XMM;
var key = env[id];

xmm({
	id: id,
	key: key
}).on("xmm", update => console.log(update));
