const ripple = require("ripple-lib");

const decide = require("./decide");

function tick(ledger)
{
	const api = this;
	const config = api.xmm;
	const id = config.id;
	const deadline = config.deadline;
	const time = ledger.ledgerTimestamp;

	ledger = ledger.ledgerVersion;
	if (ledger <= deadline) {
		api.once("ledger", tick);
		return;
	}

	decide(api, id, ledger).then(state => {
		state.id = id;
		state.time = time;
		state.ledger = ledger;
		api.emit("xmm", state);
		api.once("ledger", tick);
	}).catch(error => {
		console.error(error);
		api.once("ledger", tick);
	});
}

module.exports = config => {
	const api = new ripple.RippleAPI({
		server: "wss://s1.ripple.com",
	});

	api.connect();
	api.once("ledger", tick);
	api.xmm = config;

	return api;
};
