const prefix = "?"
const {client} = require('../index.js')

client.on("messageCreate", (message) => {

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();

    if (!client.commands.get(command)) return;

    client.commands.get(command).execute(client, message, args);
})