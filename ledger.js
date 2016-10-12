exports.command = "ledger [count]";
exports.desc = "Wait for ledger(s) to close";
exports.builder = yargs => yargs;
exports.handler = config => {
	require(".").connect(config).then(xmm => {
		console.info(xmm.ledger);
		process.exit();
	});
};
