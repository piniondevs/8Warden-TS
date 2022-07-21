import { Message, MessageEmbed } from "discord.js";

module.exports = {
  name: "russianroulette",
  alt: "rsr",
  description:
    "You basically play russian roulette (google if you dont know what that means) but if you lose you get kicked. :)",
  handler: (message: Message) => {
    const bullet = Math.floor(Math.random() * 7);
    const roll = Math.floor(Math.random() * 7);

    message.channel.send({
      embeds: [
        new MessageEmbed({
          title: "Russian Roulette",
          color: bullet === roll ? 15158332 : 3066993,
          description: `Bullet: **${bullet}** Roll: **${roll}**\n${
            bullet === roll
              ? "You Got Shot and Fucking Died 🤣"
              : "You survive 🙄"
          }`,
        }),
      ],
    });

    if (bullet === roll) {
      setTimeout(async () => {
        const dm = await message.member?.createDM();
        await dm?.send({ content: "https://discord.gg/CNrPmKQDMq" });
        message.member?.kick("mf died playing russian roulette.");
      }, 2000);
      return;
    }
  },
};
