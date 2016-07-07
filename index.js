const ripple = require("ripple-lib");

const api = new ripple.RippleAPI({
	server: "wss://s1.ripple.com:443"
});

function check(id, cb)
{
	api.connect().then(() => {
		api.getBalances(id).then(cb);
	});
}

module.exports = check;
