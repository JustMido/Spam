const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("562409758615797827")
setInterval(function() {
channel.send(`JustSpamNiggas JustSpamNiggas JustSpamNiggas JustSpamNiggas JustSpamNiggas`);
}, 30)
})

client.login(process.env.BOT_TOKEN);