exports.command = "ledger [count]";
exports.desc = "Wait for ledger(s) to close";
exports.aliases = [
	"wait"
];
exports.builder = yargs => yargs;
exports.handler = connect((config, xmm) => {
	console.info(xmm.ledger);
	process.exit();
});
