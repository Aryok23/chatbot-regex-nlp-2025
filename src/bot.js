import "dotenv/config.js";  // otomatis load .env
import { Client, GatewayIntentBits } from "discord.js";
import { respond } from "./chatbot.js";
import logger from "./logger.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  logger.info(`🤖 Bot logged in as ${client.user.tag}`);
  console.log(`🤖 Bot logged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  const reply = respond(message.content);
  logger.info(`User ${message.author.tag}: ${message.content}`);
  logger.info(`Bot reply: ${reply}`);
  
  message.reply(reply);
});

client.login(process.env.DISCORD_TOKEN).catch((err) => {
  logger.error(`Login failed: ${err.message}`);
});
