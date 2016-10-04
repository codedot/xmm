exports.command = "ledger";
exports.desc = "Wait for a ledger to close";
exports.builder = yargs => yargs;
exports.handler = config => {
	const xmm = require(".");
	const api = xmm(config);

	api.once("ledger", ledger => {
		console.log(ledger);
		process.exit();
	});
};
