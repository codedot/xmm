#!/usr/bin/env node

global.abort = (msg, error) => {
	if (error)
		console.error(error);
	else
		console.error(msg);

	process.exit(1);
};

global.connect = callback => config => {
	callback = callback.bind(null, config);
	require(".").connect(config).then(callback).catch(abort);
};

global.testnet = callback => config => {
	callback = callback.bind(null, config);
	require(".").testnet().then(callback).catch(abort);
};

const getobj = x => ("string" == typeof x) ? JSON.parse(x) : x;
const opts = {
	assets: {
		coerce: getobj,
		describe: "Dictionary of assets",
		default: {},
		global: true
	},
	count: {
		alias: "n",
		describe: "Number of ledgers to close",
		default: 1,
		global: true
	},
	cushion: {
		alias: "f",
		describe: "Factor to multiply estimated fee",
		default: 1,
		global: true
	},
	delta: {
		alias: "d",
		describe: "Stake to trade",
		default: 0.01,
		global: true
	},
	ledger: {
		alias: "l",
		describe: "Historical ledger version",
		number: true,
		global: true
	},
	server: {
		alias: "s",
		describe: "WebSocket server",
		default: "wss://s1.ripple.com",
		global: true
	},
	timeout: {
		alias: "t",
		describe: "Timeout in seconds for requests",
		default: 5,
		global: true
	},
	wallets: {
		coerce: getobj,
		describe: "Dictionary of wallets",
		default: {},
		global: true
	}
};

const home = require("os").homedir();
const conf = require("path").join(home, ".xmm.json");

function load(path)
{
	try {
		const read = require("fs").readFileSync;
		const json = read(path, "utf-8");
		const dict = JSON.parse(json);

		return dict;
	} catch (error) {
		console.warn("%s: Could not load configuration", path);

		return {};
	}
}

require("yargs")
	.usage("Usage: $0 [options] <command> [arguments]")
	.options(opts)
	.config("config", load)
	.alias("config", "c")
	.global("config")
	.default("config", conf, "~/.xmm.json")
	.command(require("./balance"))
	.command(require("./generate"))
	.command(require("./ledger"))
	.command(require("./send"))
	.command(require("./testnet"))
	.command(require("./what"))
	.demand(1)
	.strict()
	.recommendCommands()
	.version()
	.alias("version", "v")
	.help()
	.alias("help", "h")
	.wrap(70)
	.fail(abort)
	.argv;
