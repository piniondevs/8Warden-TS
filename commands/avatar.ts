import { Message } from "discord.js";

module.exports = {
  name: "avatar",
  alt: "av",
  description: "Show someones avatar.",
  handler: (message: Message) => {
    const target = message.mentions.users.first();
    if (!target) {
      message.channel.send({
        content: message.author.displayAvatarURL({ format: "jpg", size: 512 }),
      });
      return;
    }
    message.channel.send({
      content: target.displayAvatarURL({ format: "jpg", size: 512 }),
    });
  },
};
