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
		const dup = [];
		const bad = [];
		const far = [];
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
			let ratio = 1;

			if (!pair)
				return;

			ratio *= 1 - line.cost / saldo[src];
			ratio *= 1 + line.value / saldo[dst];
			line.ratio = ratio;

			pair.active.push(line);
		});

		for (const pair in offers) {
			const entry = offers[pair];
			const active = entry.active;
			const top = active.sort((a, b) => {
				if (a.ratio > b.ratio)
					return -1;
				else
					return 1;
			});
			const best = top.shift();

			if (best) {
				const good = entry.proper.ratio;
				const ratio = best.ratio;

				if (ratio < Math.sqrt(good))
					bad.push(entry);

				if (ratio > Math.pow(good, 2))
					far.push(entry);

				entry.active = best;
			}

			dup.push.apply(dup, top);
		}

		console.info({dup, bad, far});
		process.exit();
	}).catch(abort);
});
