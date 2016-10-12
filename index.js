const faucet = "https://faucet.altnet.rippletest.net/accounts";
const testnet = "wss://s.altnet.rippletest.net:51233";
const isabs = id => /^r[A-Za-z0-9]{25,}$/.test(id);

class XMM {
	constructor(opts) {
		this.ledger = opts.ledger;
		this.api = opts.api;
		this.wallets = opts.wallets;
		this.assets = opts.assets;
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
