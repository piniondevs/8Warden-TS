import { Message, Permissions, TextChannel } from "discord.js";

module.exports = {
  name: "slowmode",
  alt: "sl",
  description: "Turn on slow mode in a channel.",
  handler: async (message: Message) => {
    if (!message.member?.permissions.has([Permissions.FLAGS.MANAGE_MESSAGES])) {
      message.channel.send({
        content: "You do not have the permission to do this, please try again",
      });
      return;
    }

    const arg: number = parseInt(message.content.split(" ")[1]); // its dumb but so is life

    if (!arg) {
      message.channel.send("Pass in a number");
      return;
    }

    if (message.channel instanceof TextChannel) {
      message.channel.setRateLimitPerUser(arg, "Bot Slowmode Command");
    }
  },
};
