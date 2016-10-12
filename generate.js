exports.command = "generate";
exports.desc = "Generate a testnet configuration";
exports.builder = yargs => yargs;
exports.handler = config => {
	require(".").generate().then(dummy => {
		console.info(JSON.stringify(dummy, null, "\t"));
		process.exit();
	});
};
