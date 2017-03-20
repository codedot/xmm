exports.command = "kill <offer>";
exports.desc = "Cancel an existing order";
exports.aliases = [
	"cancel",
	"rm"
];
exports.builder = yargs => yargs;
exports.handler = connect((config, xmm) => {
	xmm.cancel(config.offer).then(tx => {
		print(tx);
		process.exit();
	}).catch(abort);
});
