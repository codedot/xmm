const ripple = require("ripple-lib");

function setsaldo(state, balances)
{
	var iou = 0;
	var saldo = {};

	balances.forEach(amount => {
		var currency = amount.currency;
		var issuer = amount.counterparty;
		var value = parseFloat(amount.value);

		if (issuer)
			currency += ":" + issuer;

		if (value > 0)
			saldo[currency] = value;
		else
			iou += -value;
	});

	state.saldo = saldo;
	state.iou = iou;
}

function check(api, id, param)
{
	var state = {};
	var saldo = api.getBalances(id, param).then(balances => {
		setsaldo(state, balances);
	});
	var prices = saldo.then(() => {
		var targets = [];

		return Promise.all(targets).then(paths => {
			state.prices = paths;
		});
	});
	var book = api.getOrders(id, param).then(orders => {
		state.book = orders;
	});

	return Promise.all([prices, book]).then(() => {
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
