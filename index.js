const ripple = require("ripple-lib");

module.exports = (id, key) => {
	var api = new ripple.RippleAPI({
		server: "wss://s1.ripple.com",
	});

	api.connect();
	api.on("ledger", ledger => {
		var options = {
			ledgerVersion: ledger.ledgerVersion
		};

		Promise.all([
			api.getBalances(id, options),
			api.getOrders(id, options)
		]).then(result => api.emit("xmm", {
			id: id,
			ledger: ledger.ledgerVersion,
			time: ledger.ledgerTimestamp,
			balances: result[0],
			orders: result[1],
			actions: []
		}));
	});

	return api;
};
