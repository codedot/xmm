exports.command = "cost <dst> [wallet]";
exports.desc = "Estimate cost of a value";
exports.aliases = [
	"price"
];
exports.builder = yargs => yargs;
exports.handler = connect((config, xmm) => {
	console.info(xmm.ledger);
	process.exit();
});
