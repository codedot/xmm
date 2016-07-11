module.exports = api => {
	const config = api.xmm;
	const id = config.id;
	const opt = {
		ledgerVersion: config.ledger
	};
	const state = {};
	const psaldo = api.getBalances(id, opt).then(saldo => {
		state.saldo = saldo;
	});
	const pprices = psaldo.then(() => {
		const targets = [];

		return Promise.all(targets).then(prices => {
			state.prices = prices;
		});
	});
	const pbook = api.getOrders(id, opt).then(book => {
		state.book = book;
	});

	return Promise.all([pprices, pbook]).then(() => {
		return state;
	});
}
