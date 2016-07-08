const ripple = require("ripple-lib");

const api = new ripple.RippleAPI({
	server: "wss://s1.ripple.com"
});

exports.check = id => new Promise(resolve => {
	api.connect();
	api.once("ledger", ledger => {
		var ledger = ledger.ledgerVersion;
		var options = {
			ledgerVersion: ledger
		};

		Promise.all([
			api.getBalances(id, options),
			api.getOrders(id, options)
		]).then(result => resolve({
			id: id,
			ledger: ledger,
			balances: result[0],
			orders: result[1]
		}));
	});
});
