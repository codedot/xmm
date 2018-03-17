"use strict";

const connect = require("./connect");
const ips = require("./ips");

const test = peer => /^[0-9.]+:[0-9]+$/.test(peer);
const add = json => {
	try {
		json = JSON.parse(json);
		json = json["peer-ips"];
		json = json.filter(test);
		ips.add(json);
	} catch (error) {
	}
};
const iterate = () => ips.get().then(peer => {
	console.log(`Connecting to ${peer}`);
	return connect(peer).then(res => {
		console.log("Response", res);
		add(res.body);
		return iterate();
	});
});

iterate().catch(reason => {
	console.log(reason);
	process.exit();
});
