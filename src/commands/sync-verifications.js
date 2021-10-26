const db = require("quick.db");
const verifications = new db.table("verifications");
const adminRole = "899402399280664616";
const verifiedRole = "899426529916899339";

module.exports = {
    name: "sync-verifications",
    execute: async (client, message, args) => {
        if (message.member.roles.cache.has(adminRole)) {
            message.reply("Syncing verifications...");

            let syncedMembers = 0;
            let falseVerifiedMembers = 0;

            message.guild.members.cache.forEach(member => {
                if (member.roles.cache.has(verifiedRole)) {
                    syncedMembers = syncedMembers + 1;

                    if (!verifications.has(member.id)) {
                        falseVerifiedMembers = falseVerifiedMembers + 1;

                        member.roles.remove(verifiedRole);
                    }
                }
            });

            message.reply(`Verifications have been synced.\n\nSynced Members: ${syncedMembers.toLocaleString()}\nFalse Verifications: ${falseVerifiedMembers.toLocaleString()}`);
        } else {
            return;
        }
    }
}