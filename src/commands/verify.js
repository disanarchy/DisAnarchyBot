const db = require("quick.db");
const verifications = new db.table("verifications");

module.exports = {
    name: "verify",
    execute: async (client, message, args) => {
        if (message.author.bot) {
            return message.reply("We don't allow bots to verify.");
        }

        if (verifications.has(message.author.id)) {
            return message.reply("You're already verified!");
        }

        const roleId = "899426529916899339";
        const role = message.guild.roles.cache.get(roleId);

        message.member.roles.add(role);

        verifications.set(message.author.id, { isVerified: true, username: message.author.username, id: message.author.id });

        message.reply("You're now verified!");
    }
}