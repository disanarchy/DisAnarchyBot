const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "ready",
    execute: async (client) => {
        if (!db.get("verification_message_id")) {
            client.channels.cache.get("899426674448420874").messages.cache.forEach(message => {
                message.delete();
            });

            const embed = new MessageEmbed()
                .setTitle("Disanarchy Verification")
                .setThumbnail(client.guilds.cache.get("899401788493557781").iconURL())
                .setDescription(`Welcome to Disanarchy, before you verify to gain access to our server we must inform you of some important things. We do not tolerate content that can/will affect someone's mental health.`)

            const row = new MessageActionRow();

            const button = new MessageButton()
                .setCustomId("verify")
                .setLabel("Verify")
                .setStyle("PRIMARY")

            row.addComponents(button);

            let msg = client.channels.cache.get("899426674448420874").send({ embeds: [embed], components: [row] });

            const filter = (interaction) => interaction.customId == "verify";

            let collector = client.channels.cache.get("899426674448420874").createMessageComponentCollector({ filter });

            collector.on("collect", (i) => {
                let role = client.guilds.cache.get("899401788493557781").roles.cache.get("899426529916899339");

                i.member.roles.add(role);
            });

            db.set("verification_message_id", msg.id);
        } else if (!client.channels.cache.get("899426674448420874").messages.fetch(db.get("verification_message_id"))) {
            client.channels.cache.get("899426674448420874").messages.cache.forEach(message => {
                message.delete();
            });

            const embed = new MessageEmbed()
                .setTitle("Disanarchy Verification")
                .setThumbnail(client.guilds.cache.get("899401788493557781").iconURL())
                .setDescription(`Welcome to Disanarchy, before you verify to gain access to our server we must inform you of some important things. We do not tolerate content that can/will affect someone's mental health.`)

            const row = new MessageActionRow();

            const button = new MessageButton()
                .setCustomId("verify")
                .setLabel("Verify")
                .setStyle("PRIMARY")

            row.addComponents(button);

            let msg = client.channels.cache.get("899426674448420874").send({ embeds: [embed], components: [row] });

            const filter = (interaction) => interaction.customId == "verify";

            let collector = client.channels.cache.get("899426674448420874").createMessageComponentCollector({ filter });

            collector.on("collect", (i) => {
                let role = client.guilds.cache.get("899401788493557781").roles.cache.get("899426529916899339");

                i.member.roles.add(role);
            });

            db.set("verification_message_id", msg.id);
        }
    }
}