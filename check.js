module.exports = api => {
	const config = api.xmm;
	const id = config.id;
	const delta = config.delta;
	const opt = {
		ledgerVersion: config.ledger
	};
	const state = {};
	const psaldo = api.getBalances(id, opt).then(saldo => {
		const dict = {};
		var iou = 0;

		saldo.forEach(amount => {
			const value = parseFloat(amount.value);

			if (value > 0)
				dict[amount.currency] = value;
			else
				iou += -value;
		});

		state.saldo = dict;
		state.iou = iou;
	});
	const pprices = psaldo.then(() => {
		const targets = [];
		const saldo = state.saldo;

		for (let asset in saldo) {
			const value = delta * saldo[asset];
			const amount = {
				currency: asset,
				value: value.toFixed(6)
			};
			const route = {
				source: {
					address: id
				},
				destination: {
					address: id,
					amount: amount
				}
			};
			const ppaths = api.getPaths(route);

			targets.push(ppaths);
		}

		return Promise.all(targets).then(prices => {
			state.prices = prices;
		});
	});
	const pbook = api.getOrders(id, opt).then(book => {
		state.book = undefined;
	});

	return Promise.all([pprices, pbook]).then(() => {
		return state;
	});
}
