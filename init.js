"use strict";

const connect = require("./connect");

const ips = [];
const test = peer => /^[0-9.]+:[0-9]+$/.test(peer);
const map = new Map();
const add = json => {
	try {
		json = JSON.parse(json);
		json = json["peer-ips"];
		json = json.filter(test);
		json.forEach(peer => {
			if (map.has(peer))
				return;

			map.set(peer);
			ips.push(peer);
		});
	} catch (error) {
	}
};
const iterate = () => {
	const peer = ips.pop();

	if (!peer)
		return Promise.reject("No more peers");

	return connect(peer).then(res => {
		const status = res.status;

		console.info(`${peer}: ${status}`);

		if (101 == status)
			return res.socket;

		if (503 == status)
			add(res.body);

		return iterate();
	});
};

module.exports = peer => {
	ips.push(peer);
	return iterate();
};
