import { Message } from "discord.js";

module.exports = {
  name: "coinflip",
  alt: "cf",
  description: "Flip a coin",
  handler: (message: Message) => {
    const coinSides = ["Heads", "Tails"];
    message.channel.send({
      content: `${coinSides[Math.floor(Math.random() * coinSides.length)]}`,
    });
  },
};
