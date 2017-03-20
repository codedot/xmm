"use strict";

exports.command = "cost <dst> [me]";
exports.desc = "Estimate cost of a value";
exports.aliases = [
	"price"
];
exports.builder = yargs => yargs;
exports.handler = connect((config, xmm) => {
	xmm.cost(config.dst, config.me).then(lines => {
		lines.forEach(line => {
			console.info(line.human);
		});
		process.exit();
	}).catch(abort);
});
