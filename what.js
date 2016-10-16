exports.command = "what <string>";
exports.desc = "Tell what a string means";
exports.builder = yargs => yargs;
exports.handler = config => {
	require(".").connect(config).then(xmm => {
		const obj = xmm.parse(config.string);
		const msg = [];
		let type, asset, issuer;

		if (!obj) {
			console.error("undefined");
			process.exit(1);
		}

		type = obj.type;
		msg.push(type);

		switch (type) {
		case "value":
			msg.push(obj.value);
		case "asset":
			asset = obj.asset;
			msg.push(asset.code);

			issuer = asset.issuer;
			if (issuer) {
				msg.push("issued by");
				msg.push(issuer);
			}

			msg.push("in wallet");
		case "wallet":
			msg.push(obj.wallet);
		}

		console.info(msg.join(" "));
		process.exit();
	});
};
