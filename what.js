exports.command = "what <string>";
exports.desc = "Tell what a string means";
exports.aliases = [
	"parse"
];
exports.builder = yargs => yargs;
exports.handler = connect((config, xmm) => {
	const arg = xmm.parse(config.string);
	const human = arg.human;
	const msg = [];
	let type, asset, issuer, key, tag;

	if (human) {
		msg.push(human);
		msg.push("is");
	}

	type = arg.type;
	msg.push(type);

	switch (type) {
	case "offer":
		msg.push(arg.seq);
		msg.push("of");
		msg.push(arg.cost);
		asset = arg.base;
		msg.push(asset.code);

		issuer = asset.issuer;
		if (issuer) {
			msg.push("issued by");
			msg.push(issuer);
		}

		msg.push("for");
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

		tag = arg.tag;
		if (tag) {
			msg.push("tagged as");
			msg.push(tag);
		}

		key = arg.key;
		if (key) {
			msg.push("with key");
			msg.push(key);
		}
	}

	console.info(msg.join(" "));
	process.exit();
});
