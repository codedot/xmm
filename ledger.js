exports.command = "ledger";
exports.desc = "Wait for a ledger to close";
exports.builder = yargs => yargs;
exports.handler = config => {
	require(".").connect(config).then(xmm => {
		console.info(xmm.ledger);
		process.exit();
	});
};
