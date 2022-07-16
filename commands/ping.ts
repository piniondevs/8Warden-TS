import { Message } from "discord.js";

module.exports = {
  name: "ping",
  alt: "p",
  description: "Shows the current latency.",
  handler: (message: Message) => {
    message.channel.send(`${Math.round(message.client.ws.ping)}ms`);
  },
};
