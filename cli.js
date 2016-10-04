#!/usr/bin/env node

const opts = {
	server: {
		alias: "s",
		describe: "WebSocket server URL",
		default: "wss://s1.ripple.com",
		global: true
	},
	delta: {
		alias: "d",
		describe: "Stake to trade",
		default: 0.01,
		global: true
	}
};

const home = require("os").homedir();
const conf = require("path").join(home, ".xmm.json");
const argv = require("yargs")
	.usage("Usage: $0 [options] [command [arguments]]")
	.options(opts)
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
