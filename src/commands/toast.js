module.exports = {
    name: "toast",
    execute: async (client, message, args) => {
        let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

        if (!user) {
            return message.reply("You must provide a user or user id to toast.");
        }

        if (user.id == message.author.id) {
            return message.reply("You cannot toast yourself.");
        }

        message.reply(`${message.author} just toasted ${user}!!! Get toasted!`);
    }
}