exports.command = "trust <dst>";
exports.desc = "Set a trust line";
exports.aliases = [
	"set"
];
exports.builder = yargs => yargs;
exports.handler = connect((config, xmm) => {
	console.info(xmm.ledger);
	process.exit();
});
