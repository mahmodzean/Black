const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`m!play |mahmod AR Music`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});


client.login(process.env.BOT_TOKEN);
