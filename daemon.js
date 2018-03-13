"use strict";

const key = require("./key");

const req = require("https").request({
	hostname: "r.ripple.com",
	port: 51235,
	headers: {
		"Upgrade": "RTXP/1.2",
		"Connection": "Upgrade"
	}
}, res => {
	console.log(res.statusCode, res.statusMessage);
	process.exit();
});

req.on("socket", socket => {
	socket.on("secureConnect", () => {
		const sig = key.sign(socket).toString("base64");

		req.setHeader("Public-Key", key.pub);
		req.setHeader("Session-Signature", sig);
		req.end();
	});
});
