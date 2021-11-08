const { Inhibitor } = require('klasa');
const friendlyrunIn = {
	GUILD_TEXT: "Guild Text",
	GUILD_NEWS: 'Guild News',
	DM: 'DM',
	GUILD_ANY: 'Guild Any
}

module.exports = class extends Inhibitor {

	run(message, command) {
		if (!command.runIn.length) throw message.language.get('INHIBITOR_RUNIN_NONE', command.name);
		if (command.runIn.includes('GUILD_ANY') && message.guild) return;
		if (!command.runIn.includes(message.channel.type)) throw message.language.get('INHIBITOR_RUNIN', command.runIn.map(key => friendlyrunIn[key]).join(', '));
	}

};
