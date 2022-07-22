import { Message, Permissions } from "discord.js";

module.exports = {
  name: "ban",
  alt: "b",
  description: "Bans a user.",
  handler: async (message: Message) => {
    try {
      await message.guild?.members.fetch();

      if (!message.member?.permissions.has([Permissions.FLAGS.BAN_MEMBERS])) {
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

      if (user?.bannable) {
        user.ban();
        message.channel.send({
          content: `${user?.user.username} vanished ?????`,
        });
        return;
      }

      return;
    } catch (err) {
      console.error(err);
    }
  },
};
