"use strict";

const helper = require("./helper");

const base58 = helper.base58;
const cksum = helper.cksum;
const ec = helper.ec;
const mkshared = helper.mkshared;

const key = ec.genKeyPair();

function derive()
{
	const type = Buffer.from([28]);
	const pub = key.getPublic();
	const raw = Buffer.from(pub.encodeCompressed());
	const sum = cksum(Buffer.concat([type, raw]));
	const buf = Buffer.concat([type, raw, sum]);

	return base58.encode(buf);
}

exports.pub = derive();
exports.sign = socket => {
	const shared = mkshared([
		socket.getFinished(),
		socket.getPeerFinished()
	]);
	const der = key.sign(shared).toDER();

	return Buffer.from(der);
}
