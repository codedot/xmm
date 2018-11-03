"use strict";

const connect = require("./connect");

const peer = process.argv.pop();

connect(peer).then(res => {
	console.log(res);
});
