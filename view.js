exports.command = "view <me>";
exports.desc = "List active orders";
exports.aliases = [
	"active",
	"list",
];
exports.builder = yargs => yargs;
exports.handler = connect((config, xmm) => {
	xmm.offers(config.me).then(lines => {
		lines = lines.map(line => line.human);
		console.info(lines.join("\n"));
		process.exit();
	}).catch(abort);
});
