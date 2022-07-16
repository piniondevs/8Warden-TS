import { Message } from "discord.js";

module.exports = {
  name: "8ball",
  alt: "8b",
  description: "Ask me a yes or no question.",
  handler: (message: Message) => {
    let query: string | string[] = message.content.trim().split(" ");
    query.shift();
    query = query.join(" ");

    if (!query) {
      message.channel.send("Please ask me a question");
      return;
    }

    const responses = [
      "It is certain.",
      "It is decidedly so.",
      "Without a doubt.",
      "Yes definetly.",
      "You may rely on it.",
      "As i see it yes.",
      "Most likely.",
      "Outlook good.",
      "Yes.",
      "Sign points to yes.",
      "Reply hazy, try again.",
      "Ask again later.",
      "Better not tell you right now.",
      "Cannot predict.",
      "Concentrate and ask again.",
      "Dont count on it.",
      "My reply is no.",
      "My sources say no.",
      "Outlook is not so good.",
      "MMMMMMMMMMMMMMMMMMMMMMMMM.",
    ];

    const choice = responses[Math.floor(Math.random() * responses.length)];

    message.channel.send({ content: `Question: ${query}\nAnswer: ${choice}` });
  },
};
