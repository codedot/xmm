exports.command = "balance <wallet>";
exports.desc = "Check balances in a wallet";
exports.builder = yargs => yargs;
exports.handler = config => {
	const xmm = require(".");
	const api = xmm(config);

	api.once("ledger", ledger => {
		console.log(ledger);
		process.exit();
	});
};
