"use strict";

const basex = require("base-x");
const crypto = require("crypto");
const elliptic = require("elliptic");

const abc = "rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz";
const sha = version => data => {
        const hash = crypto.createHash("sha" + version);

        return hash.update(data).digest();
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
const base58 = basex(abc);
const ec = new elliptic.ec("secp256k1");
const cksum = data => {
        data = sha256(data);
        data = sha256(data);
        return data.slice(0, 4);
};
const mkshared = pair => {
	const mix = xor(sha512(pair[0]), sha512(pair[1]));

	return sha512(mix).slice(0, 32);
};
const secret = ec.genKeyPair();

function derive()
{
	const type = Buffer.from([28]);
	const pub = secret.getPublic();
	const raw = Buffer.from(pub.encodeCompressed());
	const sum = cksum(Buffer.concat([type, raw]));
	const buf = Buffer.concat([type, raw, sum]);

	return base58.encode(buf);
}

function verify(param)
{
	const shared = mkshared(param.fin);
	const pub = base58.decode(param.pub);
	const body = pub.slice(0, 34);
	const sum = pub.slice(34);
	const raw = pub.slice(1, 34);
	const key = ec.keyFromPublic(raw);
	const sig = Buffer.from(param.sig, "base64");

	if (38 != pub.length)
		return false;
	if (28 != pub[0])
		return false;
	if (!cksum(body).equals(sum))
		return false;

	return key.verify(shared, sig);
}

exports.pub = derive();
exports.sign = (socket, enc) => {
	const shared = mkshared([
		socket.getFinished(),
		socket.getPeerFinished()
	]);
	const der = secret.sign(shared).toDER();
	const buf = Buffer.from(der);

	if (enc)
		return buf.toString(enc);
	else
		return buf;
}
exports.verify = msg => {
	const socket = msg.socket;
	const headers = msg.headers;
	const pub = headers["public-key"];
	const sig = headers["session-signature"];

	return verify({
		fin: [
			socket.getFinished(),
			socket.getPeerFinished()
		],
		pub: headers["public-key"],
		sig: headers["session-signature"]
	});
};
