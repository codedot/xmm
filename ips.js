"use strict";

const https = require("https");

const url = "https://data.ripple.com/v2/network/topology/nodes";
const map = new Map();
const ips = [];
const add = list => {
	list.forEach(peer => {
		if (map.has(peer))
			return;

		map.set(peer);
		ips.push(peer);
	});
	console.log(`Got ${ips.length} peer(s)`);
};

https.get(url, msg => {
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
	});
});
