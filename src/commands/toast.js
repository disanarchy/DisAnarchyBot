module.exports = {
    name: "toast",
    execute: async (client, message, args) => {
        let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

        if (!user) {
            return message.reply("You must provide a user or user id to toast.");
        }

        message.reply(`${message.author} just toasted ${user}!!! Get toasted!`);
    }
}