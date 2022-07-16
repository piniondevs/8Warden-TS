import { Message } from "discord.js";

module.exports = {
  name: "author",
  alt: "ath",
  description: "Shows the name of the bot author",
  handler: (message: Message) => {
    message.channel.send({
      content: "Coded and developed by Tahlil (tahlil#3239)",
    });
  },
};
