import { Message } from "discord.js";

module.exports = {
  name: "version",
  alt: "v",
  description: "Prints the version number of the bot.",
  handler: (message: Message) => {
    message.channel.send("Warden Version 1.0");
  },
};
