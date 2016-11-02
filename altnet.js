exports.command = "altnet";
exports.desc = "Generate Test Net configuration";
exports.aliases = [
	"dummy"
];
exports.builder = yargs => yargs;
exports.handler = config => {
	require(".").altnet().then(dummy => {
		console.info(JSON.stringify(dummy, null, "\t"));
		process.exit();
	}).catch(abort);
};
