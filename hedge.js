function getoffer(src, dst, stake)
{
	const sell = stake * src / (1 + stake);
	const buy = stake * dst / (1 - stake);
	const ratio = (1 - sell / src) * (1 + buy / dst);

	return {
		sell: sell,
		buy: buy,
		ratio: ratio
	};
}

exports.command = "hedge <me>";
exports.desc = "Apply the Talmud strategy";
exports.aliases = [
	"run",
	"talmud"
];
exports.builder = yargs => yargs;
exports.handler = connect((config, xmm) => {
	const me = config.me;
	const ledger = config.ledger;

	Promise.all([
		xmm.balance(me, ledger),
		xmm.offers(me, ledger)
	]).then(state => {
		const saldo = {};
		const xrp = `XRP@${me}`;
		const offers = {};
		const assets = [];
		let xrpbal, cost, stake;

		state[0].forEach(line => {
			const value = line.value;

			if (value > 0) {
				const asset = xmm.parse({
					type: "asset",
					asset: line.asset,
					wallet: me
				}).human;

				saldo[asset] = value;
				assets.push(asset);
				return true;
			}
		});

		xvalue = saldo[xrp];
		cost = config.maxfee / xvalue;
		stake = assets.length * Math.sqrt(cost);

		assets.forEach(asset => {
			const value = saldo[asset];
			let back, forth;

			if (xrp == asset)
				return;

			back = getoffer(value, xvalue, stake);
			offers[`${xrp}/${asset}`] = {
				proper: back,
				active: []
			};

			forth = getoffer(xvalue, value, stake);
			offers[`${asset}/${xrp}`] = {
				proper: forth,
				active: []
			};
		});

		state[1].forEach(line => {
			const src = xmm.parse({
				type: "asset",
				asset: line.base,
				wallet: me
			}).human;
			const dst = xmm.parse({
				type: "asset",
				asset: line.asset,
				wallet: me
			}).human;
			const pair = offers[`${dst}/${src}`];

			if (!pair)
				return;

			pair.active.push(line.human);
		});

		console.log(offers);
		process.exit();
	}).catch(abort);
});
