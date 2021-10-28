module.exports = {
    name: "toast",
    execute: async (client, message, args) => {
        if (message.author.id == "599204289088585738") { // ban dotto from command
            return
        }

        if (message.mentions.roles.size < 0) {
            return message.reply("Do not mention a role.");
        }

        let user = message.mentions.users.first() || await message.guild.members.fetch(args[0]);

        if (!user) {
            return message.reply("You must provide a user or user id to toast.");
        }

        if (user.id == message.author.id) {
            return message.reply("You cannot toast yourself.");
        }

        message.reply(`${message.author} just toasted ${user}!!! Get toasted!`);
    }
}