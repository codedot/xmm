exports.command = "testnet";
exports.desc = "Generate testnet configuration";
exports.aliases = [
	"dummy"
];
exports.builder = yargs => yargs;
exports.handler = config => {
	require(".").testnet().then(dummy => {
		console.info(JSON.stringify(dummy, null, "\t"));
		process.exit();
	}).catch(abort);
};
