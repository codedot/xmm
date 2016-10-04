const request = require("request");

const faucet = "https://faucet.altnet.rippletest.net/accounts";
const testnet = "wss://s.altnet.rippletest.net:51233";

function generate(resolve, reject)
{
	request.post({
		url: faucet,
		json: true
	}, (error, response, body) => {
		resolve(body.account);
	});
}

Promise.all([
	new Promise(generate),
	new Promise(generate)
]).then(wallets => {
	console.log(JSON.stringify({
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
		server: testnet,
		delta: 0.01
	}, null, "\t"));
});
