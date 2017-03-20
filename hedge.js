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
	const id = xmm.parse(config.me);
	const me = id.human;
	const wallet = id.wallet;
	const ledger = config.ledger;

	Promise.all([
		xmm.balance(me, ledger),
		xmm.offers(me, ledger)
	]).then(state => {
		const saldo = {};
		const xrp = `XRP@${me}`;
		const offers = {};
		const assets = [];
		const zombie = [];
		const bad = [];
		const absent = [];
		const far = [];
		let xrpbal, cost, stake;

		state[0].forEach(line => {
			const value = line.value;

			if (value > 0) {
				const asset = xmm.parse({
					type: "asset",
					asset: line.asset,
					wallet: wallet
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
				src: xmm.parse(asset),
				dst: xmm.parse(xrp),
				proper: back,
				active: []
			};

			forth = getoffer(xvalue, value, stake);
			offers[`${asset}/${xrp}`] = {
				src: xmm.parse(xrp),
				dst: xmm.parse(asset),
				proper: forth,
				active: []
			};
		});

		state[1].forEach(line => {
			const src = xmm.parse({
				type: "asset",
				asset: line.base,
				wallet: wallet
			}).human;
			const dst = xmm.parse({
				type: "asset",
				asset: line.asset,
				wallet: wallet
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
			const proper = entry.proper;
			const active = entry.active;
			const top = active.sort((a, b) => {
				if (a.ratio > b.ratio)
					return -1;
				else
					return 1;
			});
			const best = top.shift();
			const offer = xmm.parse({
				type: "offer",
				base: entry.src.asset,
				asset: entry.dst.asset,
				value: proper.buy,
				cost: proper.sell,
				seq: best ? best.seq : 0,
				wallet: wallet
			});

			if (best) {
				const good = proper.ratio;
				const ratio = best.ratio;

				offer.old = best.human;

				if (ratio < Math.sqrt(good)) {
					offer.status = "bad";
					bad.push(offer);
				}

				if (ratio > Math.pow(good, 2)) {
					offer.status = "far";
					far.push(offer);
				}

				zombie.push.apply(zombie, top);
			} else {
				offer.status = "absent";
				absent.push(offer);
			}
		}

		console.info({
			zombie: zombie.map(offer => offer.human),
			bad: bad.map(offer => {
				return {
					before: offer.old,
					after: offer.human
				};
			}),
			absent: absent.map(offer => offer.human),
			far: far.map(offer => {
				return {
					before: offer.old,
					after: offer.human
				};
			})
		});
		process.exit();
	}).catch(abort);
});
