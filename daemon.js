"use strict";

const key = require("./key");

const req = require("https").request({
	hostname: "r.ripple.com",
	port: 51235,
	headers: {
		"Upgrade": "RTXP/1.2",
		"Connection": "Upgrade"
	},
	rejectUnauthorized: false,
	timeout: 5e3
}, res => {
	const status = res.statusCode;

	console.log(status, res.headers);

	if (101 != status)
		consume(res);
});

function consume(res)
{
	const chunks = [];

	res.setEncoding("utf8");
	res.on("data", chunk => {
		chunks.push(chunk);
	});
	res.on("end", () => {
		console.log(chunks.join(""));
	});
}

req.on("socket", socket => {
	socket.on("secureConnect", () => {
		const sig = key.sign(socket).toString("base64");

		req.setHeader("Public-Key", key.pub);
		req.setHeader("Session-Signature", sig);
		req.end();
	});
});
