const dotenv = require("dotenv");
dotenv.config();

const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.DirectMessages,
  ],
});

client.login(process.env.DISCORD_TOKEN);

client.on("messageCreate", async (message) => {
  if (message.content === "Hello Sean") {
    message.channel.send(`Hi Im Sean nice to meet you my id is ${message.id}`);
  }
});
