"use strict";

const helper = require("./helper");

const mkshared = helper.mkshared;
const base58 = helper.base58;
const ec = helper.ec;
const cksum = helper.cksum;

const real = {
	fin: [
		Buffer.from("d98467bb33a492e0f8b23c3a", "hex"),
		Buffer.from("1c85ddd70de7b3619bcf8cae", "hex")
	],
	pub: "n9JkLKbdx7nK5DAVEVt12tfuPTjRyKSzgHcL5sZt1MEZCys5anyA",
	sig: "MEUCIQCB0sFjTi7EJOSHYNBm0r2wNy2CZ5GP1kG95fQWYSrgMwIgcPqEZsSXpIvX/DTA2fLeiBEHNpNODL1yIKGusx/cjLU="
};
const fake = {
	fin: [
		Buffer.from("d9383d581334ffcdda922307", "hex"),
		Buffer.from("43590272a7cb5a650a24dd59", "hex")
	],
	pub: "n9LWUrZTrM2GLigMp54bUrGL552fwupJAwWawc9SjC1hsY7mEWiU",
	sig: "MEQCIDIotSEvk3C9czwlBaLZ5dfgnJdG+3r93zIa6Vt43cC2AiBlF+D1IQutf/lJy18Ff8GKHRSzxtBEonrHlBRXurVUaw=="
};
const test = {
	fin: [
		Buffer.from("1f2c30863c069e18041520c2", "hex"),
		Buffer.from("06a648cb5f7b1840ab3f9d2b", "hex")
	],
	pub: "n9LcJaZ2m3xLo5JzJSZP6FUEQUDhynGqxDUpQFdgMNLHx9pDTDWj",
	sig: "MEUCIQC8vYzrk7JtL500tGwnX3sdcjmwdJGiKLHqN8aGW+BcUQIgN7zzU/CnjmAIRUyK6Mq6BnAqLJ8nwwjuNmhA/YU2H8w="
};

function verify(param)
{
	const shared = mkshared(param.fin);
	const pub = base58.decode(param.pub);
	const body = pub.slice(0, 34);
	const sum = pub.slice(34);
	const raw = pub.slice(1, 34);
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
verify(fake);
verify(test);
