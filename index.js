const Discord = require("discord.js");
require("dotenv").config();

const commandHandler = require("./commandHandler");

const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
  ],
});

client.on("ready", () => {
  console.log(`Bot is ready`);
  client.user.setActivity(':rofl:');
});

client.on("messageCreate", (message) => {
  if (message.author.id === client.user.id) return;
  commandHandler(message);
});

client.on("guildMemberAdd", (member) => {
  let channel = member.guild.channels.cache.get("982327785009864907");
  channel.send({ content: `Welcome to the server <@${member.id}>` });
});

client.login(process.env.TOKEN);
