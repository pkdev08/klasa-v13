const { Extendable } = require('klasa');
const { TextChannel, DMChannel, User } = require('discord.js');

module.exports = class extends Extendable {

	constructor(...args) {
		super(...args, { appliesTo: [TextChannel, DMChannel, User] });
	}

	sendCode(code, content, options) {
        return this.send({ ...options, content, code });
    }

    sendEmbed(embeds, content, options) {
        return this.send({ ...options, content, ...embeds});
    }

	sendFile(attachment, name, content, options = {}) {    
        return this.send({ content, options , files: [{ attachment, name }] });
    }

    sendLocale(key, localeArgs = [], options = {}) {
        if (!Array.isArray(localeArgs)) [options, localeArgs] = [localeArgs, []];
        return this.sendMessage(this.language.get(key, ...localeArgs), options);
    }

	sendMessage(content, options) {
		return this.send(content, options);
	}

};
