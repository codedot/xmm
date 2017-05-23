#!/usr/bin/env node

"use strict";

const Bitstamp = require("bitstamp-promise");
const env = process.env;
const key = env.BITSTAMP_KEY;
const secret = env.BITSTAMP_SECRET;
const id = env.BITSTAMP_ID;
const api = new Bitstamp(key, secret, id);

const argv = require("yargs")
	.usage("Usage: $0 [options]")
	.strict()
	.help()
	.alias("help", "h")
	.wrap(50)
	.argv;

const saldo = {
	usd: 0,
	eur: 0,
	btc: 0,
	xrp: 0
};

function abort(reason)
{
	console.error(reason);
	process.exit(1);
}

api.balance().then(data => {
	for (const asset in saldo) {
		const value = data[`${asset}_balance`];

		saldo[asset] = parseFloat(value);
	}

	console.info(saldo);

	return api.open_orders("all");
}).then(data => {
	console.info(data);
}).catch(abort);
