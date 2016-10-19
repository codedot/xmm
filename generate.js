exports.command = "generate";
exports.desc = "Generate testnet configuration";
exports.aliases = [
	"gen"
];
exports.builder = yargs => yargs;
exports.handler = generate((config, dummy) => {
	console.info(JSON.stringify(dummy, null, "\t"));
	process.exit();
});
