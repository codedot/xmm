"use strict";

const helper = require("./helper");

const mkshared = helper.mkshared;
const base58 = helper.base58;
const ec = helper.ec;
const cksum = helper.cksum;

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

module.exports = msg => {
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
