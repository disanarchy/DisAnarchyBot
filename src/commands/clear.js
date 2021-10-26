module.exports = {
    name: "clear",
    execute: async (client, message, args) => {

        if(!message.member.has.permission("MANAGE_MESSAGES")) return message.reply("Please come back when you have the permissions")
        if(!args[0]) return message.channel.send("WHY ARE YOU LIKE THIS!!")
        message.bulkDelete((args[0]).then(() => {
            message.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000))
        }))

    }
}
