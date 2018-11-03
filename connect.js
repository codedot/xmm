"use strict";

const key = require("./key");

const https = require("https");

const consume = msg => new Promise(resolve => {
	const chunks = [];

	msg.setEncoding("utf8");
	msg.on("data", chunk => {
		chunks.push(chunk);
	});
	msg.on("end", () => {
		resolve(chunks.join(""));
	});
});

module.exports = peer => new Promise((resolve, reject) => {
	const address = peer.split(":");
	const host = address.shift();
	const port = parseInt(address.shift());
	const req = https.request({
		hostname: host,
		port: port,
		headers: {
			"Connect-As": "Peer",
			"Upgrade": "RTXP/1.2",
			"Connection": "Upgrade"
		},
		rejectUnauthorized: false
	}, msg => {
		const status = msg.statusCode;
		const headers = msg.headers;
		const res = {
			peer: peer,
			status: status,
			headers: headers
		};

		consume(msg).then(body => {
			res.body = body;
			resolve(res);
		}).catch(reject);
	});

	req.on("upgrade", msg => {
		const status = msg.statusCode;
		const headers = msg.headers;

		resolve({
			peer: peer,
			status: status,
			headers: headers,
			check: key.verify(msg)
		});
	});
	req.on("socket", socket => {
		socket.on("secureConnect", () => {
			const sig = key.sign(socket, "base64");

			req.setHeader("Public-Key", key.pub);
			req.setHeader("Session-Signature", sig);
			req.end();
		});
		socket.setTimeout(3e3, () => {
			req.abort();
			resolve({
				peer: peer,
				error: "timeout"
			});
		});
	});
	req.on("error", error => {
		resolve({
			peer: peer,
			error: error
		});
	});
});
