// DOSENT FOLLOW THE ORIGINAL IMPLEMENTATION IN THE PYTHON BOT. REWRITE SOON (NEVER)

import { Message, Permissions } from "discord.js";

module.exports = {
  name: "unban",
  alt: "ub",
  description: "Unbans a user or something.",
  handler: (message: Message) => {
    if (!message.member?.permissions.has([Permissions.FLAGS.BAN_MEMBERS])) {
      message.channel.send({
        content: "You do not have the permission to do this, please try again",
      });
      return;
    }

    const id: number = parseInt(message.content.split(" ")[1]);

    if (!id) {
      message.channel.send("No user id :rofl:");
      return;
    }

    message.guild?.bans.fetch().then((bans) => {
      bans.forEach((banned) => {
        if (parseInt(banned.user.id) === id) {
          message.guild?.members.unban(banned.user.id, "bot unban");
          message.channel.send({ content: `Unbanned ${banned.user.username}` });
        }
      });
    });
  },
};
