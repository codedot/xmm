exports.command = "view <me>";
exports.desc = "List active orders";
exports.aliases = [
	"active",
	"list",
];
exports.builder = yargs => yargs;
exports.handler = connect((config, xmm) => {
	xmm.offers(config.me, config.ledger).then(lines => {
		lines = lines.map(line => line.human);

		lines = lines.join("\n");
		if (lines)
			console.info(lines);

		process.exit();
	}).catch(abort);
});
