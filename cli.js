#!/usr/bin/env node

const opts = {
	wallets: {
		coerse: JSON.parse,
		describe: "Dictionary of wallets",
		default: {},
		global: true
	},
	assets: {
		coerse: JSON.parse,
		describe: "Dictionary of assets",
		default: {},
		global: true
	},
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

function load(path)
{
	const json = require("fs").readFileSync(path, "utf-8");

	return JSON.parse(json);
}

require("yargs")
	.usage("Usage: $0 [options] <command> [arguments]")
	.options(opts)
	.config("config", load)
	.alias("config", "c")
	.global("config")
	.default("config", conf)
	.command(require("./ledger"))
	.command(require("./balance"))
	.demand(1)
	.strict()
	.recommendCommands()
	.version()
	.alias("version", "v")
	.help()
	.alias("help", "h")
	.argv;
