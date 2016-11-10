exports.command = "view <me>";
exports.desc = "List active orders";
exports.aliases = [
	"active",
	"list",
];
exports.builder = yargs => yargs;
exports.handler = connect((config, xmm) => {
	console.info(xmm.ledger);
	process.exit();
});
