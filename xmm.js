#!/usr/bin/env node

"use strict";

function ask(tx)
{
	const rl = require("readline").createInterface({
		input: process.stdin,
		output: process.stdout
	});

	console.info(tx.hash);
	console.info(JSON.parse(tx.json));

	return new Promise(resolve => {
		const expected = "submit";
		const query = `Type "${expected}" to confirm: `;

		rl.question(query, answer => {
			rl.close();
			resolve(expected == answer);
		});
	});
}

global.print = tx => {
	console.info(tx.hash);
	console.info(JSON.parse(tx.json));
	console.info(`${tx.code}: ${tx.desc}`);
};

global.connect = callback => config => {
	if (!config.yes)
		config.yes = ask;

	callback = callback.bind(null, config);
	require(".").connect(config).then(callback).catch(abort);
};

global.abort = (msg, error) => {
	if (error)
		console.error(error);
	else
		console.error(msg);

	process.exit(1);
};

const getobj = x => ("string" == typeof x) ? JSON.parse(x) : x;
const opts = {
	assets: {
		coerce: getobj,
		describe: "Dictionary of assets",
		default: {}
	},
	count: {
		alias: "n",
		describe: "Number of ledgers to close",
		default: 1
	},
	cushion: {
		alias: "f",
		describe: "Factor to multiply estimated fee",
		default: 1
	},
	delta: {
		alias: "d",
		describe: "Stake to trade",
		default: 0.01
	},
	hedge: {
		coerce: getobj,
		describe: "List of pairs to trade",
		default: []
	},
	ledger: {
		alias: "l",
		describe: "Historical ledger version",
		number: true
	},
	maxfee: {
		alias: "m",
		describe: "Maximum fee to pay",
		default: 1e-5
	},
	offset: {
		alias: "o",
		describe: "Offset from the current legder",
		default: 3
	},
	server: {
		alias: "s",
		describe: "WebSocket server",
		default: "wss://s1.ripple.com"
	},
	timeout: {
		alias: "t",
		describe: "Timeout in seconds for requests",
		default: 10
	},
	wallets: {
		coerce: getobj,
		describe: "Dictionary of wallets",
		default: {}
	},
	yes: {
		alias: "y",
		describe: "Do not ask for confirmation",
		boolean: true
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
	.default("config", conf, "~/.xmm.json")
	.command(require("./altnet"))
	.command(require("./balance"))
	.command(require("./cost"))
	.command(require("./generate"))
	.command(require("./hedge"))
	.command(require("./kill"))
	.command(require("./ledger"))
	.command(require("./offer"))
	.command(require("./send"))
	.command(require("./trust"))
	.command(require("./view"))
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
