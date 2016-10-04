const ripple = require("ripple-lib");

module.exports = config => {
	const api = new ripple.RippleAPI({
		server: "wss://s1.ripple.com"
	});

	api.xmm = config;
	api.connect();
	return api;
};
