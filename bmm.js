#!/usr/bin/env node

"use strict";

const Bitstamp = require("bitstamp-promise");
const env = process.env;
const key = env.BITSTAMP_KEY;
const secret = env.BITSTAMP_SECRET;
const id = env.BITSTAMP_ID;
const api = new Bitstamp(key, secret, id);

const opts = {
	delta: {
		alias: "d",
		describe: "Stake to trade",
		default: 0.01
	},
	timeout: {
		alias: "t",
		describe: "Timeout in seconds",
		default: 30
	},
};

const argv = require("yargs")
	.usage("Usage: $0 [options]")
	.options(opts)
	.strict()
	.help()
	.alias("help", "h")
	.wrap(50)
	.argv;

const stake = argv.delta;

const prec = {
	btcusd: 2,
	btceur: 2,
	eurusd: 5,
	xrpusd: 5,
	xrpeur: 5,
	xrpbtc: 8,
	usd: 2,
	eur: 2,
	btc: 8,
	xrp: 8
};

const saldo = {
	usd: 0,
	eur: 0,
	btc: 0,
	xrp: 0
};

const book = {
	btcusd: {
		counter: "btc",
		base: "usd"
	},
	btceur: {
		counter: "btc",
		base: "eur"
	},
	eurusd: {
		counter: "eur",
		base: "usd"
	},
	xrpusd: {
		counter: "xrp",
		base: "usd"
	},
	xrpeur: {
		counter: "xrp",
		base: "eur"
	},
	xrpbtc: {
		counter: "xrp",
		base: "btc"
	}
};

function abort(reason)
{
	console.error(reason);
	process.exit(1);
}

function estimate(order)
{
	const pair = order.pair;
	const entry = book[pair];
	const base = saldo[entry.base];
	const counter = saldo[entry.counter];
	const sign = ("ask" == order.type) ? 1 : -1;
	const amount = order.amount;
	const volume = order.price * amount;
	const cost = entry.fee * volume;
	let ratio = 1;

	if (!base || !counter)
		return;

	ratio *= base + sign * volume - cost;
	ratio *= counter - sign * amount;
	ratio /= base * counter;
	return ratio;
}

function talmud(pair, type)
{
	const sign = ("ask" == type) ? 1 : -1;
	const entry = book[pair];
	const fee = entry.fee;
	const counter = saldo[entry.counter];
	const base = saldo[entry.base];
	const coef = 1 + 2 * sign * stake - stake * fee;
	const order = {
		pair: pair,
		type: type,
		amount: stake * counter / coef,
		price: coef * base / counter
	};

	if (!base || !counter)
		return;

	order.ratio = estimate(order);
	return order;
}

api.balance().then(data => {
	for (const asset in saldo) {
		const value = data[`${asset}_balance`];

		saldo[asset] = parseFloat(value);
	}

	for (const pair in book) {
		const entry = book[pair];
		const fee = data[`${pair}_fee`];

		entry.fee = parseFloat(fee) / 100;

		entry.ask = {
			proper: talmud(pair, "ask"),
			active: []
		};
		entry.bid = {
			proper: talmud(pair, "bid"),
			active: []
		};
	}

	return api.open_orders("all");
}).then(data => {
	data.forEach(line => {
		const type = ("1" == line.type) ? "ask" : "bid";
		const pair = line.currency_pair
			.split("/")
			.map(asset => asset.toLowerCase())
			.join("");
		const entry = book[pair];

		line.pair = pair;
		line.type = type;
		line.price = parseFloat(line.price);
		line.amount = parseFloat(line.amount);
		line.ratio = estimate(line);
		delete line.currency_pair;
		delete line.datetime;

		entry[type].active.push(line);
	});

	console.info(JSON.stringify({
		saldo: saldo,
		book: book
	}, null, "\t"));
	process.exit();
}).catch(abort);

setTimeout(() => {
	abort("Timed out");
}, argv.timeout * 1e3);
