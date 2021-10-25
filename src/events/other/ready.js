const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "ready",
    execute: async (client) => {
        console.log("Bot is online.");
    }
}