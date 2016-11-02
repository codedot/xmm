exports.command = "send <src> <dst>";
exports.desc = "Pay or convert a value";
exports.aliases = [
	"pay"
];
exports.builder = yargs => yargs;
exports.handler = connect((config, xmm) => {
	const src = config.src;
	const dst = config.dst;

	xmm.send(src, dst).then(tx => {
		console.info(tx.hash);
		console.info(JSON.parse(tx.json));
		console.info(`${tx.code}: ${tx.desc}`);
		process.exit();
	}).catch(abort);
});
