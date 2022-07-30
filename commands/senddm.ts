import { Message } from "discord.js";

module.exports = {
  name: "senddm",
  alt: "sdm",
  description: "Send a dm to a mentioned user.",
  handler: async (message: Message) => {
    await message.guild?.members.fetch();

    const target = message.mentions.users.first();

    if (!target) {
      message.channel.send({
        content: "You gotta specify someone to send the dm to.",
      });
      return;
    }

    const user = message.guild?.members.cache.get(target.id);

    const dm = await user?.createDM();

    let text: string[] | string = message.content.trim().split(" ");
    text.shift();
    text = text.join(" ");
    text = text.replace(/<@.*>/gm, "");

    const content = `**${message.member?.user.username}**: ${text}`;
    dm?.send({ content: content });
  },
};
