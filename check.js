module.exports = api => {
	const config = api.xmm;
	const id = config.id;
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

		return Promise.all(targets).then(prices => {
			state.prices = undefined;
		});
	});
	const pbook = api.getOrders(id, opt).then(book => {
		state.book = undefined;
	});

	return Promise.all([pprices, pbook]).then(() => {
		return state;
	});
}
