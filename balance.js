exports.command = "balance <wallet> [ledger]";
exports.desc = "Check balances in a wallet";
exports.builder = yargs => yargs;
exports.handler = config => {
	require(".").connect(config).then(xmm => {
		const wallet = config.wallet;
		const ledger = config.ledger;

		xmm.balance(wallet, ledger).then(balances => {
			console.info(balances);
			process.exit();
		}).catch(reason => {
			console.error(reason);
			process.exit(1);
		});
	});
};
