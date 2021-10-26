global.ROOT_PATH = __dirname;

const Discord = require("discord.js");
const config = require(ROOT_PATH + "/config.json")
const fs = require("fs");
const chalk = require("chalk");

const client = new Discord.Client({intents: ["GUILD_MESSAGES", "GUILDS", "GUILD_MEMBERS"]});
client.commands = new Discord.Collection();

exports.client = client;

const loadCommands = require(ROOT_PATH + "/load-commands");
loadCommands.load(client, "./commands");

const events = fs.readdirSync(ROOT_PATH + "/events").filter(file => file.endsWith(".js"));
events.forEach(file => {
    try {
        require(ROOT_PATH + `/events/${file}`)
        console.log(chalk.green('[events] ') + "Loaded " + file.replace(".js", ""));
    } catch (error) {
        console.log(chalk.red("[events] ") + "Failed To load " + file.replace(".js", "") + ": " + error.message);
    }
});

client.on("ready", () => {
    console.log(`\n \n✅  | Wakey Wakey time for work ${client.user.tag}`)
})

client.login(config.token);