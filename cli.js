#!/usr/bin/env node

const argv = require("yargs")
	.usage("Usage: $0 command [options]")
	.command(require("./ledger"))
	.demand(1)
	.strict()
	.help()
	.argv;

console.log(argv);
