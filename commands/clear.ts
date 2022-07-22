import { Message, TextChannel } from "discord.js";

module.exports = {
  name: "clear",
  alt: "clr",
  description: "Clears the number of texts you pass in.",
  handler: (message: Message) => {
    const amount: number = parseInt(message.content.split(" ")[1]);

    if (amount === undefined) return;

    if (amount > 100) {
      message.channel.send("the numbers gotta be less than 100");
      return;
    }

    if (message.channel instanceof TextChannel) {
      message.channel.bulkDelete(amount);
    }
  },
};
