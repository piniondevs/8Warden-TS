import { Message } from "discord.js";

module.exports = {
  name: "rockpaperscissor",
  alt: "rps",
  description: "Play rock paper scissor",
  handler: (message: Message) => {
    const userChoice = message.content.split(" ")[1];
    const states = ["rock", "paper", "scissor"];
    if (!states.includes(userChoice)) {
      message.channel.send(
        "**Error** This command only works with rock, paper, or scissors."
      );
      return;
    }
    const choice = states[Math.floor(Math.random() * states.length)];
    message.channel.send(
      `Choice: \`${userChoice}\`\nBot Choice: \`${choice}\``
    );
  },
};
