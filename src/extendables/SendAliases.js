const { Extendable } = require('klasa');
const { TextChannel, DMChannel, User } = require('discord.js');

module.exports = class extends Extendable {

    constructor(...args) {
        super(...args, { appliesTo: [TextChannel, DMChannel, User] });
    }

    sendCode(code, content, options) {
        content = `\`\`\`${code}\n${content}\n\`\`\``
		return this.send({ content, ...options });
    }

    sendEmbed(embed, content, options) {
		return this.send({ embed, content, ...options });
    }

    sendFile(attachment, name, content, options = {}) {    
        return this.send({ content, options , files: [{ attachment, name }] });
    }

    sendLocale(key, localeArgs = [], options = {}) {
        if (!Array.isArray(localeArgs)) [options, localeArgs] = [localeArgs, []];
        return this.send(this.language.get(key, ...localeArgs), options);
    }

    sendMessage(content, options) {
        return this.send({ content, ...options });
    }

};