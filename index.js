const ripple = require("ripple-lib");

module.exports = config => {
	const api = new ripple.RippleAPI({
		server: "wss://s1.ripple.com"
	});

	api.xmm = config;
	api.connect();
	api.once("ledger", ledger => {
		console.log(ledger);
		process.exit();
	});

	return api;
};
