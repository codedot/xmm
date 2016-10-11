const ripple = require("ripple-lib");

exports.connect = config => new Promise(resolve => {
	const api = new ripple.RippleAPI({
		timeout: config.timeout * 1e3,
		server: config.server
	});

	api.connect();
	api.once("ledger", ledger => {
		ledger = ledger.ledgerVersion;
		resolve({ledger, api, config});
	});
});
