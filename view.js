"use strict";

exports.command = "view <me>";
exports.desc = "List active orders";
exports.aliases = [
	"active",
	"list",
];
exports.builder = yargs => yargs;
exports.handler = connect((config, xmm) => {
	xmm.offers(config.me, config.ledger).then(lines => {
		lines.forEach(line => {
			console.info(line.human);
		});
		process.exit();
	}).catch(abort);
});
