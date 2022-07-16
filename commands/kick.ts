import { Message } from "discord.js";

module.exports = {
  name: "kick",
  alt: "k",
  description: "Kicks user.",
  handler: (message: Message) => {
    message.channel.send('rofl')
  },
};
