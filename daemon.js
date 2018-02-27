"use strict";

const ecdh = require("crypto").createECDH("secp256k1");
const pub = ecdh.generateKeys("base64", "compressed");
const priv = ecdh.getPrivateKey("base64");
const socket = require("tls").connect({
	host: "r.ripple.com",
	port: 51235
}, () => {
	const client = socket.getFinished().toString("hex");
	const server = socket.getPeerFinished().toString("hex");

	console.info(client, server);
	socket.end();
});

console.info(pub, priv);
