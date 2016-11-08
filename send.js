exports.command = "send <src> <dst>";
exports.desc = "Pay or convert a value";
exports.aliases = [
	"pay"
];
exports.builder = yargs => yargs;
exports.handler = connect((config, xmm) => {
	xmm.send(config.src, config.dst).then(tx => {
		console.info(tx.hash);
		console.info(JSON.parse(tx.json));
		console.info(`${tx.code}: ${tx.desc}`);
		process.exit();
	}).catch(abort);
});
