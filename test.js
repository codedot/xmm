"use strict";

const connect = require("./connect");

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
	const headers = req.headers;
	const pub = headers["public-key"];
	const sig = headers["session-signature"];

	console.log("Request", {
		method: req.method,
		url: req.url,
		headers: headers
	});
	socket.write([
		"HTTP/1.1 101 Switching Protocols",
		"Upgrade: RTXP/1.2",
		"Connection: Upgrade",
		`Public-Key: ${pub}`,
		`Session-Signature: ${sig}`,
		"", ""
	].join("\r\n"));
	socket.end();
	server.close();
});
