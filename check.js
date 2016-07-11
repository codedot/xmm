module.exports = api => {
	const config = api.xmm;
	const id = config.id;
	const delta = config.delta;
	const opt = {
		ledgerVersion: config.ledger
	};
	const raw = {};
	const state = {
		raw: raw
	};
	const psaldo = api.getBalances(id, opt).then(saldo => {
		const dict = {};
		var nassets = 0;

		saldo.forEach(amount => {
			const value = parseFloat(amount.value);

			if (value > 0) {
				dict[amount.currency] = value;
				++nassets;
			}
		});

		state.saldo = dict;
		state.nassets = nassets;
		raw.balances = saldo;
	});
	const pprices = psaldo.then(() => {
		const dict = {};
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
			dict[asset] = {};
		}

		return Promise.all(targets).then(prices => {
			prices.forEach(row => {
				row.forEach(cell => {
					var gain = 1;
					var from, into, src, dst;
					var oldsrc, olddst;

					src = cell.source;
					src = src.maxAmount;
					from = src.currency;
					oldsrc = saldo[from];
					src = src.value;
					src = parseFloat(src);
					gain *= 1 - src / oldsrc;

					dst = cell.destination;
					dst = dst.amount;
					into = dst.currency;
					olddst = saldo[into];
					dst = dst.value;
					dst = parseFloat(dst);
					gain *= 1 + dst / olddst;

					dict[from][into] = gain;
				});
			});

			state.prices = dict;
			raw.paths = prices;
		});
	});
	const pbook = api.getOrders(id, opt).then(book => {
		state.book = undefined;
		raw.orders = book;
	});

	return Promise.all([pprices, pbook]).then(() => {
		return state;
	});
}
