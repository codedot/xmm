"use strict";

const wrap = require("./wrap");

const peer = process.argv.pop();

wrap(peer).then(socket => {
	console.info(socket.constructor.name);
	process.exit();
}).catch(reason => {
	console.warn(reason);
	process.exit(1);
});
