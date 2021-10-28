const { client } = require("../index.js");

client.on("guildMemberRemove", (member) => {
    let channelId = "903085764412325938";
    let guildId = "899401788493557781";

    if (member.guild.id != guildId) {
        return
    } else {
        let channel = client.guilds.cache.get(guildId).channels.cache.get(channelId);

        channel.send(`${member.user.tag} just left DisAnarchy! We'll miss you!`);
    }
});