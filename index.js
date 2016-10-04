const ripple = require("ripple-lib");

module.exports = config => {
	const api = new ripple.RippleAPI({
		server: config.server
	});

	api.xmm = config;
	api.connect();
	return api;
};
