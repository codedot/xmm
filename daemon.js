"use strict";

const assert = require("assert");
const crypto = require("crypto");
const bs58 = require("bs58");
const secp256k1 = require("secp256k1");
const ecdh = crypto.createECDH("secp256k1");
const pub = ecdh.generateKeys("hex", "compressed");
const priv = ecdh.getPrivateKey();
const pub2 = secp256k1.publicKeyCreate(priv);
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
	const mix = xor(sha512(client), sha512(server));
	const shared = sha512(mix).slice(0, 32);
	const sig = secp256k1.sign(shared, priv).signature;
	const base64 = sig.toString("base64");

	console.log(`Session-Signature: ${base64}`);
	socket.end();
});

assert(secp256k1.privateKeyVerify(priv));

console.info(`Public-Key: ${bs58.encode(pub2)}`);
