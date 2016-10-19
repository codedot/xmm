exports.command = "testnet";
exports.desc = "Generate testnet configuration";
exports.aliases = [
	"dummy"
];
exports.builder = yargs => yargs;
exports.handler = testnet((config, dummy) => {
	console.info(JSON.stringify(dummy, null, "\t"));
	process.exit();
});
