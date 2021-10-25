const Discord = require("discord.js");
const config = require("./config.json")
const fs = require("fs");
const chalk = require("chalk");
const intents = new Discord.Intents(32767);

const client = new Discord.Client({intents: ["GUILD_MESSAGES", "GUILDS", "GUILD_MEMBERS"]});
client.commands = new Discord.Collection();

exports.client = client;

const loadCommands = require("./load-commands");
loadCommands.load(client, "./commands");

const events = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
events.forEach(file => {
    try {
        require(`./events/${file}`)
        console.log(chalk.green('[events] ') + "Loaded " + file.replace(".js", ""));
    } catch (error) {
        console.log(chalk.red("[events] ") + "Failed To load " + file.replace(".js", "") + ": " + error.message);
    }
});

client.login(config.token);
