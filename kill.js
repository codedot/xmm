exports.command = "kill <offer>";
exports.desc = "Cancel an existing order";
exports.aliases = [
	"cancel",
	"rm"
];
exports.builder = yargs => yargs;
exports.handler = connect((config, xmm) => {
	xmm.cancel(config.offer).then(tx => {
		console.info(tx.hash);
		console.info(JSON.parse(tx.json));
		console.info(`${tx.code}: ${tx.desc}`);
		process.exit();
	}).catch(abort);
});
