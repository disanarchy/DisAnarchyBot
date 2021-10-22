const fs = require("fs");

const path = require("path");

const { load } = require("./load-commands");

module.exports.load = async (client, dir = "") => {
    const filePath = path.join(__dirname, dir);
    const files = await fs.readdirSync(filePath);
    for (const file of files) {
        const stat = await fs.lstatSync(path.join(filePath, file));
        if (stat.isDirectory()) this.load(client, path.join(dir, file));
        if (file.endsWith('.js')) {
            const cmd = require(path.join(filePath, file));
            if (cmd.disabled == true) {
                continue;
            }
            client.commands.set(cmd.name, cmd);

            if (!cmd.aliases) continue;
            cmd.aliases.forEach((alias) => {
                client.commands.set(alias, cmd);
            });
        }
    }
}