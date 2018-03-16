"use strict";

const helper = require("./helper");

const base58 = helper.base58;
const cksum = helper.cksum;
const ec = helper.ec;
const mkshared = helper.mkshared;

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
