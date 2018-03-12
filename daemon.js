"use strict";

const key = require("./key");

const tls = require("tls");

const socket = tls.connect({
	host: "r.ripple.com",
	port: 51235
}, () => {
	const sig = key.sign(socket).toString("base64");

	console.info(`Public-Key: ${key.pub}`);
	console.info(`Session-Signature: ${sig}`);

	socket.end();
});
