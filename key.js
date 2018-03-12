"use strict";

const assert = require("assert");
const crypto = require("crypto");
const bs58 = require("bs58");
const secp256k1 = require("secp256k1");

const ecdh = crypto.createECDH("secp256k1");
let key;

function sha512(data)
{
	const hash = crypto.createHash("sha512");

	hash.update(data);
	return hash.digest();
};

function xor(a, b)
{
	const x = [];
	const n = a.length;

	assert.equal(n, b.length);

	for (let i = 0; i < n; i++)
		x.push(a[i] ^ b[i]);

	return Buffer.from(x);
}

function sign(socket)
{
	const client = socket.getFinished();
	const server = socket.getPeerFinished();
	const mix = xor(sha512(client), sha512(server));
	const shared = sha512(mix).slice(0, 32);
	const sig = secp256k1.sign(shared, key).signature;

	return secp256k1.signatureExport(sig);
}

ecdh.generateKeys();
key = ecdh.getPrivateKey();
assert(secp256k1.privateKeyVerify(key));

exports.sign = sign;
exports.pub = bs58.encode(secp256k1.publicKeyCreate(key));
