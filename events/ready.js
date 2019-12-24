const fs = require("fs");

module.exports = client => {
	let packageFile = JSON.parse(fs.readFileSync("./package.json", "utf8"));
	console.log(`\n             TripleAI v${packageFile.version}\n`);
	console.log(
		`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`
	);
	console.log(`Logged in as ${client.user.tag} [ID: ${client.user.id}]\n`);

	client.user.setStatus("available");
	client.user.setActivity(client.config.activityMessage, {
		type: client.config.activityType
	});
};