exports.command = "generate";
exports.desc = "Create a new address";
exports.aliases = [
	"gen",
	"new"
];
exports.builder = yargs => yargs;
exports.handler = config => {
	const wallet = require(".").generate();

	console.info(JSON.stringify(wallet, null, "\t"));
	process.exit();
};
