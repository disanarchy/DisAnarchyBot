module.exports = {
    name: "toast",
    execute: async (message, client, args) => {
        let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

        message.reply(`${message.author} just toasted ${user}!!! Get toasted!`);
    }
}