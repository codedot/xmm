exports.command = "trust <dst>";
exports.desc = "Set a trust line";
exports.aliases = [
	"set"
];
exports.builder = yargs => yargs;
exports.handler = connect((config, xmm) => {
	xmm.trust(config.dst).then(tx => {
		console.info(tx.hash);
		console.info(JSON.parse(tx.json));
		console.info(`${tx.code}: ${tx.desc}`);
		process.exit();
	}).catch(abort);
});
