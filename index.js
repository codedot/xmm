const faucet = "https://faucet.altnet.rippletest.net/accounts";
const altnet = "wss://s.altnet.rippletest.net:51233";
const root = "rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh";
const syntax = "^(?:_(?::_(?:\\\/_:_~_)?)?@)?_$";
const pattern = syntax.replace(/_/g, "([^:@\\\/~]+)");
const re = new RegExp(pattern);

class XMMarg {
	constructor(xmm, obj) {
		this.shorten = xmm.shorten.bind(xmm);
		this.toabs = xmm.toabs.bind(xmm);
		this.wallets = xmm.wallets;
		this.assets = xmm.assets;

		this.input = JSON.stringify(obj);
		this.type = "undefined";

		if ("string" == typeof obj)
			obj = this.parse(obj);

		if (!obj)
			return;

		this.type = obj.type;
		this.base = obj.base;
		this.cost = obj.cost;
		this.seq = obj.seq;
		this.value = obj.value;
		this.asset = obj.asset;
		this.wallet = obj.wallet;
	}

	get key() {
		let id = this.shorten(this.wallet);

		id = this.wallets[id];
		if (id)
			return id.secret;
	}

	toasset(str) {
		const obj = {};
		let asset, issuer;

		if ("string" != typeof str)
			return;

		str = str.split(".");
		asset = str.shift();
		issuer = str.shift();

		if ("XRP" == asset) {
			if (issuer)
				return;

			obj.code = asset;
			return obj;
		}

		if (issuer) {
			issuer = this.toabs(issuer);
			if (!issuer)
				return;

			obj.code = asset;
			obj.issuer = issuer;
			return obj;
		}

		return this.assets[asset];
	}

	tostr(asset) {
		let issuer = asset.issuer;

		asset = asset.code;

		if (issuer) {
			issuer = this.shorten(issuer);
			asset = asset + "." + issuer;
			asset = this.shorten(asset);
		}

		return asset;
	}

	toamount(value, asset) {
		const obj = {
			value: value.toString(),
			currency: asset.code
		};
		const issuer = asset.issuer;

		if (issuer)
			obj.counterparty = issuer;

		return obj;
	}

	get amount() {
		if ("value" != this.type)
			return;

		return this.toamount(this.value, this.asset);
	}

	get src() {
		if ("offer" != this.type)
			return;

		return this.toamount(this.cost, this.base);
	}

	get dst() {
		if ("offer" != this.type)
			return;

		return this.toamount(this.value, this.asset);
	}

	get human() {
		let value, asset, issuer, wallet, seq;
		let str = "";

		switch (this.type) {
		case "offer":
			seq = this.seq.toString();
			str = "~" + seq + str;
			value = this.cost.toString();
			str = ":" + value + str;
			asset = this.tostr(this.base);
			str = "/" + asset + str;
		case "value":
			value = this.value.toString();
			str = ":" + value + str;
		case "asset":
			asset = this.tostr(this.asset);
			str = asset + str + "@";
		case "wallet":
			wallet = this.wallet;
			wallet = this.shorten(wallet);
			str = str + wallet;
			return str;
		}
	}

	parse(str) {
		const tokens = re.exec(str);
		let asset, value, wallet, type, base, cost, seq;

		if (!tokens)
			return;

		tokens.shift();

		asset = tokens.shift();
		value = tokens.shift();
		base = tokens.shift();
		cost = tokens.shift();
		seq = tokens.shift();
		wallet = tokens.shift();

		if (cost)
			type = "offer";
		else if (value)
			type = "value";
		else if (asset)
			type = "asset";
		else if (wallet)
			type = "wallet";
		else
			return;

		switch (type) {
		case "offer":
			base = this.toasset(base);
			if (!base)
				return;
			cost = parseFloat(cost);
			if (!isFinite(cost))
				return;
			seq = parseInt(seq);
			if (!(seq > 0))
				seq = void(0);
		case "value":
			value = parseFloat(value);
			if (!isFinite(value))
				return;
		case "asset":
			asset = this.toasset(asset);
			if (!asset)
				return;
		case "wallet":
			wallet = this.toabs(wallet);
			if (!wallet)
				return;
		}

		return {
			type: type,
			base: base,
			cost: cost,
			seq: seq,
			value: value,
			asset: asset,
			wallet: wallet
		};
	}
}

class XMM {
	constructor(opts) {
		let yes = opts.yes;

		if ("function" != typeof yes) {
			const result = !!yes;

			yes = tx => result;
		}

		this.confirm = tx => {
			const ask = Promise.resolve(yes(tx));

			return ask.then(granted => {
				if (granted)
					return tx;
				else
					throw "Not confirmed";
			});
		}

		this.instr = {};
		this.instr.maxLedgerVersionOffset = opts.offset;
		this.instr.maxFee = opts.maxfee.toString();
		this.ledger = opts.ledger;
		this.api = opts.api;
		this.wallets = opts.wallets;
		this.assets = opts.assets;
		this.dict = {};
		this.expand();
		this.reverse();
	}

	expand() {
		const wallets = this.wallets;
		const assets = this.assets;

		for (let alias in wallets) {
			const entry = wallets[alias];

			if ("string" == typeof entry) {
				const obj = {
					address: entry
				};

				wallets[alias] = obj;
			}
		}

		for (let alias in assets) {
			const entry = assets[alias];

			if ("string" == typeof entry) {
				const pair = entry.split(".");
				const code = pair.shift();
				const issuer = pair.shift();
				const obj = {
					code: code,
					issuer: issuer
				};

				assets[alias] = obj;
			}
		}

		for (let alias in assets) {
			const entry = assets[alias];

			entry.issuer = this.toabs(entry.issuer);
		}
	}

	reverse() {
		const dict = this.dict;
		const wallets = this.wallets;
		const assets = this.assets;

		for (let alias in wallets)
			dict[wallets[alias].address] = alias;

		for (let alias in assets) {
			const asset = assets[alias];
			let issuer = asset.issuer;
			let key = asset.code;

			if (issuer) {
				issuer = this.shorten(issuer);
				key = key.concat(".", issuer);
			}

			dict[key] = alias;
		}
	}

	shorten(line) {
		const alias = this.dict[line];

		if (alias)
			return alias;

		return line;
	}

	toabs(wallet) {
		if (/^r[A-Za-z0-9]{25,}$/.test(wallet))
			return wallet;

		wallet = this.wallets[wallet];
		if (wallet)
			return wallet.address;
	}

	tovalues(list, me) {
		const iou = {};

		me = me.wallet;

		list = list.filter(line => {
			const value = parseFloat(line.value);

			if (value > 0)
				return true;

			if (value < 0) {
				const code = line.currency;

				if (!iou[code])
					iou[code] = 0;

				iou[code] += value;
			}

			return false;
		});

		for (let code in iou) {
			const value = iou[code].toString();

			list.push({
				currency: code,
				counterparty: me,
				value: value
			});
		}

		return list.map(line => {
			const code = line.currency;
			const asset = {
				code: code
			};

			if ("XRP" != code) {
				let issuer = line.counterparty;

				if (!issuer)
					issuer = me;

				asset.issuer = issuer;
			}

			return this.parse({
				type: "value",
				value: parseFloat(line.value),
				asset: asset,
				wallet: me
			});
		});
	}

	balance(me, ledger) {
		me = this.parse(me, "wallet");

		if (!ledger)
			ledger = this.ledger;

		return this.api.getBalances(me.wallet, {
			ledgerVersion: ledger
		}).then(list => this.tovalues(list, me));
	}

	parse(arg, type) {
		arg = new XMMarg(this, arg);

		if (type && type != arg.type)
			throw `${arg.input} is not ${type}`;

		return arg;
	}

	send(src, dst) {
		src = this.parse(src, "value");
		dst = this.parse(dst, "value");

		return this.make("Payment", src, {
			source: {
				address: src.wallet,
				maxAmount: src.amount
			},
			destination: {
				address: dst.wallet,
				amount: dst.amount
			}
		});
	}

	create(offer) {
		offer = this.parse(offer, "offer");

		return this.make("Order", offer, {
			direction: "buy",
			quantity: offer.dst,
			totalPrice: offer.src,
			orderToReplace: offer.seq
		});
	}

	make(type, me, param) {
		const api = this.api;
		const method = api["prepare" + type].bind(api);
		const id = me.wallet;
		const key = me.key;

		return method(id, param, this.instr).then(tx => {
			const json = tx.txJSON;

			tx = this.api.sign(json, key);

			return this.confirm({
				blob: tx.signedTransaction,
				hash: tx.id,
				json: json
			});
		}).then(tx => this.submit(tx));
	}

	submit(tx) {
		return this.api.submit(tx.blob).then(result => {
			tx.code = result.resultCode;
			tx.desc = result.resultMessage;
			return tx;
		});
	}

	tooffer(order, me) {
		const seq = order.properties.sequence;
		const spec = order.specification;
		const sell = ("sell" == spec.direction);
		const quantity = spec.quantity;
		const price = spec.totalPrice;
		const src = sell ? quantity : price;
		const dst = sell ? price : quantity;
		const cost = parseFloat(src.value);
		const base = {
			code: src.currency,
			issuer: src.counterparty
		};
		const value = parseFloat(dst.value);
		const asset = {
			code: dst.currency,
			issuer: dst.counterparty
		};

		return this.parse({
			type: "offer",
			wallet: me.wallet,
			seq: seq,
			cost: cost,
			base: base,
			value: value,
			asset: asset
		});
	}

	tooffers(list, me) {
		return list.map(line => this.tooffer(line, me));
	}

	offers(me, ledger) {
		me = this.parse(me, "wallet");

		if (!ledger)
			ledger = this.ledger;

		return this.api.getOrders(me.wallet, {
			ledgerVersion: ledger
		}).then(list => this.tooffers(list, me));
	}

	cost(dst, me) {
		dst = this.parse(dst, "value");

		if (me)
			me = this.parse(me, "wallet");
		else
			me = dst;

		return this.api.getPaths({
			source: {
				address: me.wallet
			},
			destination: {
				address: dst.wallet,
				amount: dst.amount
			}
		}).then(list => {
			list = list.map(line => {
				line = line.source;
				line = line.maxAmount;
				return line;
			});

			return this.tovalues(list, me);
		});
	}

	trust(dst) {
		let amount;

		dst = this.parse(dst, "value");

		amount = dst.amount;
		amount.limit = amount.value;
		delete amount.value;

		return this.make("Trustline", dst, amount);
	}
}

exports.connect = config => new Promise(resolve => {
	const ripple = require("ripple-lib");
	const api = new ripple.RippleAPI({
		feeCushion: config.cushion,
		timeout: config.timeout * 1e3,
		server: config.server
	});
	let count = config.count > 0 ? config.count : 1;

	function tick(ledger)
	{
		if (count > 0) {
			--count;
			api.once("ledger", tick);
		} else {
			const xmm = new XMM({
				yes: config.yes,
				maxfee: config.maxfee,
				offset: config.offset,
				ledger: ledger.ledgerVersion,
				api: api,
				wallets: config.wallets,
				assets: config.assets
			});

			resolve(xmm);
		}
	}

	tick();
	api.connect();
});

function generate()
{
	const ripple = require("ripple-lib");
	const api = new ripple.RippleAPI();

	return api.generateAddress();
}

exports.generate = generate;

exports.altnet = opts => new Promise(resolve => {
	require("request").post({
		url: faucet,
		json: true
	}, (error, response, body) => {
		let code;

		if (error)
			throw error;

		code = response.statusCode;
		if (201 != code)
			throw body + code.toString();

		resolve({
			yes: true,
			wallets: {
				bank: body.account,
				fund: generate(),
				root: root
			},
			assets: {
				XMM: "XMM.fund",
				USD: "USD.bank",
				BTC: "BTC.bank"
			},
			server: altnet
		});
	});
});
