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

for (const pair in book) {
	const entry = book[pair];

	entry.ask = {
		proper: {},
		active: []
	};
	entry.bid = {
		proper: {},
		active: []
	};
}

api.balance().then(data => {
	for (const asset in saldo) {
		const value = data[`${asset}_balance`];

		saldo[asset] = parseFloat(value);
	}

	for (const pair in book) {
		const fee = data[`${pair}_fee`];

		book[pair].fee = parseFloat(fee) / 100;
	}

	return api.open_orders("all");
}).then(data => {
	data.forEach(line => {
		const pair = line.currency_pair
			.split("/")
			.map(asset => asset.toLowerCase())
			.join("");

		if ("1" == line.type)
			book[pair].ask.active.push(line);
		else
			book[pair].bid.active.push(line);

		line.price = parseFloat(line.price);
		line.amount = parseFloat(line.amount);
		delete line.type;
		delete line.currency_pair;
		delete line.datetime;
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
