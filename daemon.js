"use strict";

const connect = require("./connect");
const ips = require("./ips");

const iterate = () => ips.get().then(peer => {
	console.log(`Connecting to ${peer}`);
	return connect(peer).then(res => {
		console.log("Response", res);
		return iterate();
	});
});

iterate().catch(reason => {
	console.log(reason);
	process.exit();
});
