const Discord = require("discord.js");

module.exports = {
    name: "eval",
    execute: async (client, message, args) => {
        if (!message.member.roles.cache.has("899402399280664616")) {
            return
        }

        try {
            let evaled
            try {
                evaled = await eval(args.join(" "))

                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.tag)
                    .setTitle("Evaluation")
                    .addField("Input", `${args.join(" ")}`)
                    .addField("Output", `${evaled}`)


                message.channel.send(embed)
            } catch (error) {
                console.error(error)
                message.channel.send(`**Error**: ${error.message}`)
            }
        } catch (err) {
            console.error(err)
        }
    }
}