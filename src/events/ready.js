const { client } = require("../index.js");

client.on("ready", (client) => {
    console.log(client.user.username + " is online!");
    client.user.setActivity("the anarchy.", { type: "WATCHING" });
})