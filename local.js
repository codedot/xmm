"use strict";

const connect = require("./connect");

connect("r.ripple.com:51235").then(res => {
	console.log("Response", res);
});
connect("127.0.0.1:51235").then(res => {
	console.log("Response", res);
});
