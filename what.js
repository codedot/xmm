exports.command = "what <string>";
exports.desc = "Tell what a string means";
exports.builder = yargs => yargs;
exports.handler = config => {
	require(".").connect(config).then(xmm => {
		const obj = xmm.parse(config.string);

		console.info(obj);
		process.exit();
	});
};
