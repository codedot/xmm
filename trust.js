"use strict";

exports.command = "trust <dst>";
exports.desc = "Set a trust line";
exports.aliases = [
	"set"
];
exports.builder = yargs => yargs;
exports.handler = connect((config, xmm) => {
	xmm.trust(config.dst).then(tx => {
		print(tx);
		process.exit();
	}).catch(abort);
});
