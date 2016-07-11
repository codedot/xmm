const ripple = require("ripple-lib");

function check(api, id, param)
{
	var state = {};
	var saldo = api.getBalances(id, param).then(balances => {
		state.balances = balances;
	});
	var prices = saldo.then(() => {
		var targets = [];

		return Promise.all(targets).then(paths => {
			state.paths = paths;
		});
	});
	var book = api.getOrders(id, param).then(orders => {
		state.orders = orders;
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
	var config = this.xmm;
	var id = config.id;
	var deadline = config.deadline;
	var time = ledger.ledgerTimestamp;

	ledger = ledger.ledgerVersion;
	if (ledger <= deadline) {
		this.once("ledger", tick);
		return;
	}

	decide(this, id, ledger).then(state => {
		state.id = id;
		state.time = time;
		state.ledger = ledger;
		this.emit("xmm", state);
		this.once("ledger", tick);
	}).catch(error => {
		console.error(error);
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
