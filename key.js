"use strict";

const basex = require("base-x");
const crypto = require("crypto");
const elliptic = require("elliptic");

const base58 = basex("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");
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
const cksum = data => {
        data = sha256(data);
        data = sha256(data);
        return data.slice(0, 4);
};
const mkshared = socket => {
	const a = socket.getFinished();
	const b = socket.getPeerFinished();
	const mix = xor(sha512(a), sha512(b));

	return sha512(mix).slice(0, 32);
};
const ec = new elliptic.ec("secp256k1");
const secret = ec.genKeyPair();
const derive = () => {
	const type = Buffer.from([28]);
	const pub = secret.getPublic();
	const raw = Buffer.from(pub.encodeCompressed());
	const sum = cksum(Buffer.concat([type, raw]));
	const buf = Buffer.concat([type, raw, sum]);

	return base58.encode(buf);
};

exports.pub = derive();
exports.sign = (socket, enc) => {
	const shared = mkshared(socket);
	const der = secret.sign(shared).toDER();
	const buf = Buffer.from(der);

	if (enc)
		return buf.toString(enc);
	else
		return buf;
}
exports.verify = msg => {
	const headers = msg.headers;
	const shared = mkshared(msg.socket);
	const buf = base58.decode(headers["public-key"]);
	const body = buf.slice(0, 34);
	const sum = buf.slice(34);
	const pub = buf.slice(1, 34);
	const key = ec.keyFromPublic(pub);
	const proof = headers["session-signature"];
	const sig = Buffer.from(proof, "base64");

	if (38 != buf.length)
		return false;
	if (28 != buf[0])
		return false;
	if (!cksum(body).equals(sum))
		return false;

	return key.verify(shared, sig);
};
