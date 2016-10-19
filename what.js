exports.command = "what <string>";
exports.desc = "Tell what a string means";
exports.aliases = [
	"parse"
];
exports.builder = yargs => yargs;
exports.handler = connect((config, xmm) => {
	const arg = xmm.parse(config.string);
	const msg = [];
	let type, asset, issuer, key;

	type = arg.type;
	msg.push(type);

	switch (type) {
	case "value":
		msg.push(arg.value);
	case "asset":
		asset = arg.asset;
		msg.push(asset.code);

		issuer = asset.issuer;
		if (issuer) {
			msg.push("issued by");
			msg.push(issuer);
		}

		msg.push("in wallet");
	case "wallet":
		msg.push(arg.wallet);

		key = arg.key;
		if (key) {
			msg.push("with key");
			msg.push(key);
		}
	}

	console.info(msg.join(" "));
	process.exit();
});
