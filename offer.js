exports.command = "offer <src> <dst>";
exports.desc = "Create a limit order";
exports.aliases = [
	"order"
];
exports.builder = yargs => yargs;
exports.handler = connect((config, xmm) => {
	console.info(xmm.ledger);
	process.exit();
});
