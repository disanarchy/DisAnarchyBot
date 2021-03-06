const { client } = require("../index.js");
const db = require("quick.db");
const verifications = new db.table("verifications");

client.on("guildMemberAdd", (member) => {
    let channelId = "903085764412325938";
    let guildId = "899401788493557781";

    if (member.guild.id != guildId) {
        return
    } else {
        let channel = client.guilds.cache.get(guildId).channels.cache.get(channelId);

        channel.send(`${member} welcome to DisAnarchy! To gain access to our server please go into <#899426674448420874> and run ?verify!`);
    }

    if (verifications.has(member.id)) {
        let roleId = "899426529916899339";

        let role = client.guilds.cache.get(guildId).roles.cache.get(roleId);

        member.roles.add(role);
    }
});