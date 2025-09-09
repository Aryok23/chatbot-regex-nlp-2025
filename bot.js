// bot.js
require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const { respond } = require("./chatbot");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once("ready", () => {
  console.log(`🤖 Bot logged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  const reply = respond(message.content);
  message.reply(reply);
});

client.login(process.env.DISCORD_TOKEN);
