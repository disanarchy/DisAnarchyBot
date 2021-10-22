module.exports = {
    name: "ping",
    execute: async (client, message, args) => {
        return message.reply(`Pong! ${client.ws.ping} ms.`);
    }
}