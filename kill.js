exports.command = "kill <offer>";
exports.desc = "Cancel an existing order";
exports.aliases = [
	"cancel",
	"rm"
];
exports.builder = yargs => yargs;
exports.handler = connect((config, xmm) => {
	console.info(xmm.ledger);
	process.exit();
});
