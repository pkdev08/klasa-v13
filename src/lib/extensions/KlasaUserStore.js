const { Client } = require('@aero/discord.js-proxy');

module.exports = Client.extend('UserManager', UserManager => {
	/**
	 * Contains extensions to the base UserStore class
	 * @extends external:UserManager
	 */

	class KlasaUserManager extends UserManager {

		/**
		 * Fetches a user and syncs their settings
		 * @param  {...any} args d.js UserStore#fetch arguments
		 */
		async fetch(...args) {
			const user = await super.fetch(...args);
			await user.settings.sync();
			return user;
		}

	}

	return KlasaUserManager;
});
