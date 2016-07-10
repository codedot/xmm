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

function setprices(state, paths)
{
	var prices = {};

	paths.forEach(path => {
		path.forEach(pair => {
			var src = pair.source.maxAmount;
			var dst = pair.destination.amount;

			console.log(src, dst);
		});
	});

	state.prices = prices;
}

function setbook(state, orders)
{
	state.book = orders;
}

function getroute(id, state, asset)
{
	var saldo = state.saldo;
	var value = saldo[asset];
	var dst = asset;
	var amount = {};
	var src = [];
	var issuer;

	value *= 0.01;
	amount.value = value.toFixed(6);

	dst = dst.split(":");
	amount.currency = dst.shift();

	issuer = dst.shift();
	if (issuer)
		amount.counterparty = issuer;

	for (let i in saldo) {
		if (i != asset) {
			let from = {};
			let j = i.split(":");
			let currency = j.shift();
			let issuer = j.shift();

			from.currency = currency;
			if (issuer)
				from.counterparty = issuer;

			src.push(from);
		}
	}

	return {
		source: {
			//currencies: src,
			address: id
		},
		destination: {
			address: id,
			amount: amount
		}
	};
}

function check(api, id, param)
{
	var state = {};
	var saldo = api.getBalances(id, param).then(balances => {
		setsaldo(state, balances);
	});
	var prices = saldo.then(() => {
		var targets = [];

		for (let asset in state.saldo) {
			let route = getroute(id, state, asset);

			targets.push(api.getPaths(route));
		}

		return Promise.all(targets).then(paths => {
			setprices(state, paths);
		});
	});
	var book = api.getOrders(id, param).then(orders => {
		setbook(state, orders);
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
	}).catch(error => {
		console.error(error);
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
