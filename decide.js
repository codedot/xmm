const check = require("./check");

module.exports = api => check(api).then(state => {
	state.actions = undefined;
	return state;
});
