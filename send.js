exports.command = "send <src> <dst>";
exports.desc = "Pay or convert a value";
exports.builder = yargs => yargs;
exports.handler = config => {
	require(".").connect(config).then(xmm => {
		const src = config.src;
		const dst = config.dst;

		xmm.send(src, dst).then(tx => {
			tx = JSON.parse(tx.txJSON);
			console.info(tx);
			process.exit();
		}).catch(abort);
	}).catch(abort);
};
