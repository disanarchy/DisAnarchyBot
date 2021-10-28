const prefix = "?"
const { client } = require("../index.js");

client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (message.channel.id != "903376643215732786") {

    } else {
        return;
    } // blocks commands from the #chat-bot channel

    const args = message.content.slice(prefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();

    if (!client.commands.get(command)) return;

    client.commands.get(command).execute(client, message, args);
});