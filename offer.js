exports.command = "offer <offer>";
exports.desc = "Create a limit order";
exports.aliases = [
	"create",
	"order"
];
exports.builder = yargs => yargs;
exports.handler = connect((config, xmm) => {
	xmm.create(config.offer).then(tx => {
		console.info(tx.hash);
		console.info(JSON.parse(tx.json));
		console.info(`${tx.code}: ${tx.desc}`);
		process.exit();
	}).catch(abort);
});
