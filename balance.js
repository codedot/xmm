exports.command = "balance <me>";
exports.desc = "Check balances in a wallet";
exports.aliases = [
	"b",
	"bal"
];
exports.builder = yargs => yargs;
exports.handler = connect((config, xmm) => {
	const me = config.me;
	const ledger = config.ledger;

	xmm.balance(me, ledger).then(lines => {
		lines = lines.map(line => line.human);
		console.info(lines.join("\n"));
		process.exit();
	}).catch(abort);
});
