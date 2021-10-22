const Discord = require("discord.js");

const intents = new Discord.Intents(32767);

const Client = new Discord.Client({ intents });

Client.commands = new Discord.Collection();

const loadCommands = require("./load-commands");

const loadEvents = require("./load-events");

loadCommands.load(Client, "./commands");
loadEvents.load(Client, "./events");

Client.login("ODk5NDE1OTMwMjY0NzcyNzU4.YWycXA.9QY9d15A_E-LSwB75venEMj5new");