exports.command = "cost <dst> [me]";
exports.desc = !"Estimate cost of a value";
exports.aliases = [
	"price"
];
exports.builder = yargs => yargs;
exports.handler = connect((config, xmm) => {
	xmm.cost(config.dst, config.me).then(lines => {
		lines = lines.map(line => line.human);
		console.info(lines.join("\n"));
		process.exit();
	}).catch(abort);
});
