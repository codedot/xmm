"use strict";

const assert = require("assert");
const crypto = require("crypto");
const ecdh = crypto.createECDH("secp256k1");
const pub = ecdh.generateKeys("base64", "compressed");
const priv = ecdh.getPrivateKey("base64");
const sha512 = data => {
	const hash = crypto.createHash("sha512");

	hash.update(data);
	return hash.digest();
};
const xor = (a, b) => {
	const x = [];
	const n = a.length;

	assert.equal(a.length, b.length);

	for (let i = 0; i < n; i++)
		x.push(a[i] ^ b[i]);

	return Buffer.from(x);
};
const socket = require("tls").connect({
	host: "r.ripple.com",
	port: 51235
}, () => {
	const client = socket.getFinished().toString("hex");
	const server = socket.getPeerFinished().toString("hex");
	const sha1 = sha512(client);
	const sha2 = sha512(server);
	const mix = xor(sha1, sha2);
	const shared = sha512(mix).slice(0, 32);

	console.info(client, server);
	console.info(sha1.toString("hex"));
	console.info(sha2.toString("hex"));
	console.info(mix.toString("hex"));
	console.info(shared.toString("hex"));
	socket.end();
});

console.info(pub, priv);
