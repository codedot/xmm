const ripple = require("ripple-lib");

exports.connect = config => new Promise(resolve => {
	const api = new ripple.RippleAPI({
		feeCushion: config.cushion,
		timeout: config.timeout * 1e3,
		server: config.server
	});
	let count = config.count > 0 ? config.count : 1;

	function tick(ledger)
	{
		if (count > 0) {
			--count;
			api.once("ledger", tick);
		} else {
			ledger = ledger.ledgerVersion;
			resolve({ledger, api, config});
		}
	}

	tick();
	api.connect();
});
