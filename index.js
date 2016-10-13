const faucet = "https://faucet.altnet.rippletest.net/accounts";
const testnet = "wss://s.altnet.rippletest.net:51233";

class XMM {
	constructor(opts) {
		this.ledger = opts.ledger;
		this.api = opts.api;
		this.wallets = opts.wallets;
		this.assets = opts.assets;
	}

	toabs(wallet) {
		if (/^r[A-Za-z0-9]{25,}$/.test(wallet))
			return wallet;

		wallet = this.wallets[wallet];
		if (wallet)
			return wallet.address;
	}

	toxmm(obj) {
		const code = obj.currency;
		const value = obj.value;

		if (Array.isArray(obj))
			return obj.map(line => this.toxmm(line));

		if (code && value) {
			const issuer = obj.counterparty;
			let asset = code;

			if (issuer)
				asset = code.concat(".", issuer);

			return asset.concat(":", value);
		}
	}

	balance(wallet, ledger) {
		const id = this.toabs(wallet);

		if (!ledger)
			ledger = this.ledger;

		return new Promise((resolve, reject) => {
			this.api.getBalances(id, {
				ledgerVersion: ledger
			}).then(balances => {
				balances = this.toxmm(balances);
				resolve(balances);
			}).catch(reason => {
				reject(reason);
			});
		});
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

exports.generate = opts => new Promise(resolve => {
	const request = require("request");

	function create(resolve, reject)
	{
		request.post({
			url: faucet,
			json: true
		}, (error, response, body) => {
			resolve(body.account);
		});
	}

	Promise.all([
		new Promise(create),
		new Promise(create)
	]).then(wallets => {
		resolve({
			wallets: {
				fund: wallets[0],
				bank: wallets[1]
			},
			assets: {
				xmm: {
					code: "XMM",
					issuer: "fund"
				},
				usd: {
					code: "USD",
					issuer: "bank"
				},
				btc: {
					code: "BTC",
					issuer: "bank"
				}
			},
			server: testnet
		});
	});
});
