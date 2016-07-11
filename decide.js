const check = require("./check");

module.exports = (api, id, ledger) => check(api, id, {
	ledgerVersion: ledger
}).then(state => {
	state.actions = undefined;
	return state;
});
