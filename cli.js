#!/usr/bin/env node

const home = require("os").homedir();
const conf = require("path").join(home, ".xmm.json");
const argv = require("yargs")
	.usage("Usage: $0 [options] [command [arguments]]")
	.config()
	.alias("config", "c")
	.global("config")
	.default("config", conf)
	.command(require("./ledger"))
	.version()
	.alias("version", "v")
	.help()
	.alias("help", "h")
	.argv;

console.log(argv);
