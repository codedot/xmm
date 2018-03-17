"use strict";

const ips = require("./ips");

const iterate = () => ips.get().then(peer => {
	console.log(peer);
	return iterate();
});

iterate().catch(reason => {
	console.log(reason);
	process.exit();
});
