import { Message, Permissions } from "discord.js";

module.exports = {
  name: "kick",
  alt: "k",
  description: "Kicks user.",
  handler: async (message: Message) => {
    try {
      await message.guild?.members.fetch();

      if (!message.member?.permissions.has([Permissions.FLAGS.KICK_MEMBERS])) {
        message.channel.send({
          content:
            "You do not have the permission to do this, please try again",
        });
        return;
      }

      const target = message.mentions.users.first();

      if (!target) {
        message.channel.send({ content: "Please specify a member" });
        return;
      }

      const user = message.guild?.members.cache.get(target.id);

      if (user?.kickable) {
        user.kick();
        message.channel.send({ content: `${user?.user.username} got yeeted` });
        return;
      }

      return;
    } catch (err) {
      console.log(err);
      return;
    }
  },
};
