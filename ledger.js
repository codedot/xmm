exports.command = "ledger";
exports.desc = "Wait for a ledger to close";
exports.builder = yargs => yargs;
exports.handler = argv => {
	const xmm = require(".");
	const api = xmm();

	api.once("ledger", ledger => {
		console.log(ledger);
		process.exit();
	});
};
