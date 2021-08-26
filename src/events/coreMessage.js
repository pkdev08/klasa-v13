const { Event } = require('klasa');

module.exports = class extends Event {

	constructor(...args) {
		super(...args, { event: 'messageCreate' });
	}

	run(message) {
		if (this.client.ready) this.client.monitors.run(message);
	}

};
