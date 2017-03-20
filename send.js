exports.command = "send <src> <dst>";
exports.desc = "Pay or convert a value";
exports.aliases = [
	"pay"
];
exports.builder = yargs => yargs;
exports.handler = connect((config, xmm) => {
	xmm.send(config.src, config.dst).then(tx => {
		print(tx);
		process.exit();
	}).catch(abort);
});
