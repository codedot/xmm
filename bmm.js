#!/usr/bin/env node

"use strict";

const info = require("./trading.json");
const home = require("os").homedir();
const path = require("path").join(home, ".bmm.json");
const conf = require(path);
const Bitstamp = require("bitstamp-promise");
const api = new Bitstamp(conf.key, conf.secret, conf.id);
const delta = conf.delta;
const origin = new Date(conf.origin);
const init = conf.init;
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

	ratio *= base - sign * amount;
	ratio *= counter + sign * volume - cost;
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
		amount: delta * base / coef,
		price: coef * counter / base
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
	const thres = delta / 2;

	if (diff(order.ratio - 1, proper.ratio - 1) > thres)
		return true;

	if (diff(order.price, proper.price) > thres)
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

function check(action)
{
	return result => {
		console.info(action);

		if ("error" == result.status)
			throw result.reason;

		console.info(result);
		return result;
	};
}

function sequence()
{
	const kill = (acc, order) => acc.then(() => {
		const id = order.id;
		const p = api.cancel_order(id);

		return p.then(check(`kill ${id}`));
	});
	const open = (acc, order) => acc.then(() => {
		const pair = order.pair;
		const prec = book[pair].prec;
		const amount = order.amount.toFixed(prec.base);
		const price = order.price.toFixed(prec.counter);
		const type = order.type;
		const param = `${amount} @ ${price}`;
		const desc = `${type} ${pair} ${param}`;
		let p;

		if ("ask" == type)
			p = api.sell(pair, amount, price);
		else
			p = api.buy(pair, amount, price);

		return p.then(check(desc));
	});
	let seq = Promise.resolve();

	seq = script.cancel.reduce(kill, seq);
	seq = script.create.reduce(open, seq);

	return seq;
}

function gm(d)
{
	const p = assets.reduce((a, x) => a * d[x], 1);

	return Math.pow(p, 1 / assets.length);
}

function stats()
{
	const now = new Date();
	const gm0 = gm(init);
	const gm1 = gm(saldo);
	const ratio = gm1 / gm0;
	const profit = `${(1e4 * (ratio - 1)).toFixed(2)}bp`;
	const period = now.getTime() - origin.getTime();
	const year = 365.25 * 24 * 60 * 60 * 1e3;
	const annual = Math.pow(ratio, year / period);
	const apercent = `${(100 * (annual - 1)).toFixed(2)}%`;
	const time = now.toISOString();

	console.info(`${time} ${profit} ${apercent}`);
}

pairs.forEach(pair => {
	const base = pair.slice(0, 3);
	const counter = pair.slice(3);

	saldo[counter] = true;
	saldo[base] = true;

	book[pair] = {
		base: base,
		counter: counter,
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

info.forEach(line => {
	const pair = line.url_symbol;
	const entry = book[pair];

	if (!entry)
		return;

	entry.prec = {
		counter: line.counter_decimals,
		base: line.base_decimals
	};
});

api.balance().then(data => {
	assets.forEach(asset => {
		const value = data[`${asset}_balance`];

		saldo[asset] = parseFloat(value);
	});

	stats();

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

	return sequence();
}).then(() => {
	process.exit();
}).catch(abort);

setTimeout(() => {
	abort("Timed out");
}, conf.timeout * 1e3);
