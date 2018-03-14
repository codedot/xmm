"use strict";

const assert = require("assert");
const basex = require("base-x");
const crypto = require("crypto");
const elliptic = require("elliptic");

const abc = "rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz";
const base58 = basex(abc);
const ec = new elliptic.ec("secp256k1");
const key = ec.genKeyPair();

function sha256(data)
{
	const hash = crypto.createHash("sha256");

	hash.update(data);
	return hash.digest();
}

function cksum(data)
{
	data = sha256(data);
	data = sha256(data);
	return data.slice(0, 4);
}

function derive()
{
	const type = Buffer.from([28]);
	const pub = key.getPublic();
	const raw = Buffer.from(pub.encodeCompressed());
	const sum = cksum(Buffer.concat([type, raw]));
	const buf = Buffer.concat([type, raw, sum]);

	return base58.encode(buf);
}

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

exports.sign = socket => {
	const client = socket.getFinished();
	const server = socket.getPeerFinished();
	const mix = xor(sha512(client), sha512(server));
	const shared = sha512(mix).slice(0, 32);
	const der = key.sign(shared).toDER();

	return Buffer.from(der);
}

exports.pub = derive();
