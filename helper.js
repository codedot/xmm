"use strict";

const basex = require("base-x");
const crypto = require("crypto");
const elliptic = require("elliptic");

const abc = "rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz";
const sha = version => data => {
        const hash = crypto.createHash("sha" + version);

        hash.update(data);
        return hash.digest();
};
const sha256 = sha("256");
const sha512 = sha("512");
const xor = (a, b) => {
	const x = [];
	const n = a.length;

	for (let i = 0; i < n; i++)
		x.push(a[i] ^ b[i]);

	return Buffer.from(x);
};

exports.base58 = basex(abc);
exports.ec = new elliptic.ec("secp256k1");
exports.cksum = data => {
        data = sha256(data);
        data = sha256(data);
        return data.slice(0, 4);
};
exports.mkshared = pair => {
	const mix = xor(sha512(pair[0]), sha512(pair[1]));

	return sha512(mix).slice(0, 32);
};
