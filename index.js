const ripple = require("ripple-lib");

function tick(ledger)
{
	var id = this.xmm.id;
	var time = ledger.ledgerTimestamp;
	var version = ledger.ledgerVersion;
	var opt = {
		ledgerVersion: version
	};

	Promise.all([
		this.getBalances(id, opt),
		this.getOrders(id, opt)
	]).then(result => {
		var balances = result.shift();
		var orders = result.shift();

		this.emit("xmm", {
			id: id,
			ledger: version,
			time: time,
			balances: balances,
			orders: orders,
			paths: [],
			actions: []
		});
	});
}

module.exports = config => {
	var api = new ripple.RippleAPI({
		server: "wss://s1.ripple.com",
	});

	api.connect();
	api.on("ledger", tick);
	api.xmm = config;

	return api;
};
