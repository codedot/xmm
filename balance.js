exports.command = "balance <wallet> [ledger]";
exports.desc = "Check balances in a wallet";
exports.builder = yargs => yargs;
exports.handler = config => {
	const xmm = require(".");
	const api = xmm(config);
	const id = config.wallets[config.wallet].address;

	api.once("ledger", ledger => {
		if (config.ledger)
			ledger = config.ledger;
		else
			ledger = ledger.ledgerVersion;

		console.log(ledger, id);

		api.getBalances(id, {
			ledgerVersion: ledger
		}).then(balances => {
			console.log(balances);
			process.exit();
		});
	});
};
