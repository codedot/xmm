const ripple = require("ripple-lib");

function tick(ledger)
{
	var options = {
		ledgerVersion: ledger.ledgerVersion
	};

	Promise.all([
		this.getBalances(this.xmm.id, options),
		this.getOrders(this.xmm.id, options)
	]).then(result => this.emit("xmm", {
		id: this.xmm.id,
		ledger: ledger.ledgerVersion,
		time: ledger.ledgerTimestamp,
		balances: result[0],
		orders: result[1],
		actions: []
	}));
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
