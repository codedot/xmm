"use strict";

const assert = require("assert");
const basex = require("base-x");
const crypto = require("crypto");
const elliptic = require("elliptic");

const abc = "rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz";
const base58 = basex(abc);

const real = {
	fin: [
		Buffer.from("d98467bb33a492e0f8b23c3a", "hex"),
		Buffer.from("1c85ddd70de7b3619bcf8cae", "hex")
	],
	pub: "n9JkLKbdx7nK5DAVEVt12tfuPTjRyKSzgHcL5sZt1MEZCys5anyA",
	sig: "MEUCIQCB0sFjTi7EJOSHYNBm0r2wNy2CZ5GP1kG95fQWYSrgMwIgcPqEZsSXpIvX/DTA2fLeiBEHNpNODL1yIKGusx/cjLU="
};
const test = {
	fin: [
		Buffer.from("d9383d581334ffcdda922307", "hex"),
		Buffer.from("43590272a7cb5a650a24dd59", "hex")
	],
	pub: "n9LWUrZTrM2GLigMp54bUrGL552fwupJAwWawc9SjC1hsY7mEWiU",
	sig: "MEQCIDIotSEvk3C9czwlBaLZ5dfgnJdG+3r93zIa6Vt43cC2AiBlF+D1IQutf/lJy18Ff8GKHRSzxtBEonrHlBRXurVUaw=="
};

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

function sha512(data)
{
        const hash = crypto.createHash("sha512");

        hash.update(data);
        return hash.digest();
}

function xor(a, b)
{
	const x = [];
	const n = a.length;

	assert.equal(n, b.length);

	for (let i = 0; i < n; i++)
		x.push(a[i] ^ b[i]);

	return Buffer.from(x);
}

function mkshared(pair)
{
	const mix = xor(sha512(pair[0]), sha512(pair[1]));

	return sha512(mix).slice(0, 32);
}

function verify(param)
{
	const shared = mkshared(param.fin);
	const pub = base58.decode(param.pub);
	const body = pub.slice(0, 34);
	const sum = pub.slice(34);
	const raw = pub.slice(1, 34);
	const ec = new elliptic.ec("secp256k1");
	const key = ec.keyFromPublic(raw);
	const sig = Buffer.from(param.sig, "base64");

	console.log({
		length: pub.length,
		type: pub[0],
		check: cksum(body).equals(sum),
		sig: key.verify(shared, sig)
	});
}

verify(real);
verify(test);
