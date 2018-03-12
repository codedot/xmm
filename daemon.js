"use strict";

const key = require("./key");

const socket = require("tls").connect({
	host: "r.ripple.com",
	port: 51235
}, () => {
	const sig = key.sign(socket).toString("base64");

	console.info(`Session-Signature: ${sig}`);

	socket.end();
});

console.info(`Public-Key: ${key.pub}`);
