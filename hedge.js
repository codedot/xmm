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
		const assets = {};
		const xrp = `XRP@${me}`;

		state[0].forEach(line => {
			const value = line.value;

			if (value > 0) {
				const asset = xmm.parse({
					type: "asset",
					asset: line.asset,
					wallet: me
				}).human;

				assets[asset] = value;
				return true;
			}
		});

		state[1].filter(line => {
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

			if (!assets[src] || !assets[dst])
				return false;

			if ((xrp == src) || (xrp == dst))
				return true;
		}).forEach(line => {
			console.log(line.human);
		});

		process.exit();
	}).catch(abort);
});
