const ripple = require("ripple-lib");

const api = new ripple.RippleAPI({
	server: "wss://s1.ripple.com:443"
});

exports.check = id => new Promise(resolve => {
	api.once("ledger", ({ledgerVersion}) => {
		var options = {ledgerVersion};

		console.log(id, ledgerVersion);

		Promise.all([
			api.getBalances(id, options),
			api.getOrders(id, options)
		]).then(state => resolve(state));
	});

	api.connect();
});
