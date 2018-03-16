"use strict";

const connect = require("./connect");
const key = require("./key");
const verify = require("./verify");

const fs = require("fs");
const https = require("https");

const pem = file => fs.readFileSync(`fake/${file}.pem`, "utf8");
const server = https.createServer({
	key: pem("key"),
	cert: pem("cert")
});

server.listen(() => {
	const port = server.address().port;
	const self = `127.0.0.1:${port}`;

	connect(self).then(res => {
		console.log("Response", res);
	});
});
server.on("upgrade", (req, socket) => {
	const sig = key.sign(socket, "base64");

	console.log("Request", {
		method: req.method,
		url: req.url,
		headers: req.headers,
		check: verify(req)
	});
	socket.write([
		"HTTP/1.1 101 Switching Protocols",
		"Upgrade: RTXP/1.2",
		"Connection: Upgrade",
		`Public-Key: ${key.pub}`,
		`Session-Signature: ${sig}`,
		"", ""
	].join("\r\n"));
	socket.end();
	server.close();
});
