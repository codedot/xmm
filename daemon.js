"use strict";

const connect = require("./connect");

connect("r.ripple.com:51235").then(res => {
	console.info(res);
	process.exit();
}).catch(err => {
	console.warn(err);
	process.exit(1);
});
