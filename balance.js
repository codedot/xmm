exports.command = "balance <wallet> [ledger]";
exports.desc = "Check balances in a wallet";
exports.builder = yargs => yargs;
exports.handler = config => {
	require(".").connect(config).then(xmm => {
		const id = config.wallets[config.wallet].address;
		let ledger = config.ledger;

		if (!ledger)
			ledger = xmm.ledger;

		xmm.api.getBalances(id, {
			ledgerVersion: ledger
		}).then(balances => {
			console.info(balances);
			process.exit();
		}).catch(reason => {
			console.error(reason);
			process.exit(1);
		});
	});
};
