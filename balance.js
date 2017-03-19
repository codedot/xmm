exports.command = "balance <me>";
exports.desc = "Check balances in a wallet";
exports.aliases = [
	"b",
	"bal"
];
exports.builder = yargs => yargs;
exports.handler = connect((config, xmm) => {
	xmm.balance(config.me, config.ledger).then(lines => {
		lines.forEach(line => {
			console.info(line.human);
		});
		process.exit();
	}).catch(abort);
});
