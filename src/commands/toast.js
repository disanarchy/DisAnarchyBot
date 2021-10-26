module.exports = {
    name: "toast",
    execute: async (client, message, args) => {
        let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author;

        message.reply(`${message.author} just toasted ${user}!!! Get toasted!`);
    }
}