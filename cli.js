#!/usr/bin/env node

const argv = require("yargs")
	.usage("Usage: $0 command [options]")
	.command("ledger", "Wait for a ledger to close")
	.demand(1)
	.strict()
	.help()
	.argv;

console.log(argv);
