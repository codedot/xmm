"use strict";

const connect = require("./connect");
const ips = require("./ips.json");

ips.overlay.active.map(entry => {
	const ip = entry.ip;
	const port = entry.port;

	if (ip && port)
		return `${ip}:${port}`;
}).filter(peer => !!peer).forEach(peer => {
	connect(peer).then(res => {
		console.log(res);
	});
});
