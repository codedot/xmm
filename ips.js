"use strict";

const https = require("https");

const url = "https://data.ripple.com/v2/network/topology/nodes";
const map = new Map();
const ips = [];
const add = list => {
	let n = 0;

	list.forEach(peer => {
		if (map.has(peer))
			return;

		map.set(peer);
		ips.push(peer);
		++n;
	});

	console.log(`Got ${n} new peer(s)`);
};
const init = new Promise(resolve => https.get(url, msg => {
	const chunks = [];

	msg.setEncoding("utf8");
	msg.on("data", chunk => {
		chunks.push(chunk);
	});
	msg.on("end", () => {
		const json = chunks.join("");
		const obj = JSON.parse(json);
		const list = obj.nodes;

		add(list.map(entry => {
			const ip = entry.ip;
			const port = entry.port;

			if (ip && port)
				return `${ip}:${port}`;
		}).filter(peer => !!peer));

		resolve();
	});
}));

exports.add = add;
exports.get = () => init.then(() => {
	const peer = ips.shift();

	if (!peer)
		throw "No peers left";

	return peer;
});
