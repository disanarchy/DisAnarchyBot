const fs = require("fs");

const path = require("path");

const { load } = require("./load-events");

module.exports.load = async (client, dir = "") => {
    const filePath = path.join(__dirname, dir);
    const files = await fs.readdirSync(filePath);
    for (const file of files) {
        const stat = await fs.lstatSync(path.join(filePath, file));
        if (stat.isDirectory()) this.load(client, path.join(dir, file));
        if (file.endsWith('.js')) {
            const event = require(path.join(filePath, file));
            if (event.disabled == true) {
                continue;
            }
            client.on(event.name, event.execute.bind(event, client))
        }
    }
}