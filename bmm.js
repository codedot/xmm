#!/usr/bin/env node

"use strict";

const home = require("os").homedir();
const path = require("path").join(home, ".bmm.json");
const conf = require(path);
const Bitstamp = require("bitstamp-promise");
const api = new Bitstamp(conf.key, conf.secret, conf.id);
const delta = conf.delta;
const pairs = conf.pairs.sort();
const saldo = {};
const book = {};
const assets = [];
const script = {
	cancel: [],
	create: []
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
	const coef = 1 + 2 * sign * delta - delta * fee;
	const order = {
		pair: pair,
		type: type,
		amount: delta * counter / coef,
		price: coef * base / counter
	};

	if (!base || !counter)
		return;

	order.ratio = estimate(order);
	return order;
}

function decide(dir)
{
	const proper = dir.proper;
	const active = dir.active.slice().sort((a, b) => {
		if (a.ratio < b.ratio)
			return -1;
		else
			return 1;
	});
	const best = active.pop();

	if (!proper)
		return;

	active.forEach(cancel);

	if (best)
		replace(best, proper);
	else
		create(proper);
}

function diff(x, ref)
{
	if (!x)
		return 1;

	return Math.abs(x - ref) / ref;
}

function isbad(order, proper)
{
	if (diff(order.ratio, proper.ratio) > delta)
		return true;

	if (diff(order.price, proper.price) > delta)
		return true;

	return false;
}

function replace(active, proper)
{
	if (isbad(active, proper)) {
		cancel(active);
		create(proper);
	}
}

function create(order)
{
	order.action = "create";
	script.create.push(order);
}

function cancel(order)
{
	order.action = "cancel";
	script.cancel.push(order);
}

function sequence()
{
	const kill = (acc, order) => acc.then(() => {
		return api.cancel_order(order.id);
	});
	const open = (acc, order) => acc.then(() => {
		const pair = order.pair;
		const amount = order.amount;
		const price = order.price;

		if ("ask" == order.type)
			return api.sell(pair, amount, price);
		else
			return api.buy(pair, amount, price);
	});
	let p = Promise.resolve();

	p = script.cancel.reduce(kill, p);
	p = script.create.reduce(open, p);

	return p;
}

pairs.forEach(pair => {
	const counter = pair.slice(0, 3);
	const base = pair.slice(3);

	saldo[counter] = true;
	saldo[base] = true;

	book[pair] = {
		counter: pair.slice(0, 3),
		base: pair.slice(3),
		ask: {
			active: []
		},
		bid: {
			active: []
		}
	};
});

for (const asset in saldo) {
	saldo[asset] = {};
	assets.push(asset);
}

assets.sort();

api.balance().then(data => {
	assets.forEach(asset => {
		const value = data[`${asset}_balance`];

		saldo[asset] = parseFloat(value);
	});

	pairs.forEach(pair => {
		const entry = book[pair];
		const fee = data[`${pair}_fee`];

		entry.fee = parseFloat(fee) / 100;
		entry.ask.proper = talmud(pair, "ask");
		entry.bid.proper = talmud(pair, "bid");
	});

	return api.open_orders("all");
}).then(data => {
	data.forEach(line => {
		const type = ("1" == line.type) ? "ask" : "bid";
		const pair = line.currency_pair
			.split("/")
			.map(asset => asset.toLowerCase())
			.join("");
		const entry = book[pair];

		if (!entry)
			return;

		line.pair = pair;
		line.type = type;
		line.price = parseFloat(line.price);
		line.amount = parseFloat(line.amount);
		line.ratio = estimate(line);
		delete line.currency_pair;
		delete line.datetime;

		entry[type].active.push(line);
	});

	pairs.forEach(pair => {
		const entry = book[pair];

		decide(entry.ask);
		decide(entry.bid);
	});

	console.info(JSON.stringify({
		balances: saldo,
		orders: book,
		actions: script
	}, null, "\t"));

	process.exit();
}).catch(abort);

setTimeout(() => {
	abort("Timed out");
}, conf.timeout * 1e3);
