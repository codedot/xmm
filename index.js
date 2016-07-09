const ripple = require("ripple-lib");

function check(api, id, param)
{
	var state = {};
	var saldo = api.getBalances(id, param).then(balances => {
		state.saldo = balances;
	});
	var book = api.getOrders(id, param).then(orders => {
		state.book = orders;
	});

	return Promise.all([saldo, book]).then(() => {
		return state;
	});
}

function decide(api, id, ledger)
{
	var param = {
		ledgerVersion: ledger
	};

	return check(api, id, param).then(state => {
		state.actions = undefined;
		return state;
	});
}

function tick(ledger)
{
	var id = this.xmm.id;
	var time = ledger.ledgerTimestamp;

	ledger = ledger.ledgerVersion;

	decide(this, id, ledger).then(state => {
		state.id = id;
		state.time = time;
		state.ledger = ledger;
		this.emit("xmm", state);
		this.once("ledger", tick);
	});
}

module.exports = config => {
	var api = new ripple.RippleAPI({
		server: "wss://s1.ripple.com",
	});

	api.connect();
	api.once("ledger", tick);
	api.xmm = config;

	return api;
};
