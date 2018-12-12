const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on("guildMemberAdd", member => {
        if(member.guild.id === "522068696416387087") {  // ايدي السيرفر
  const channel = member.guild.channels.find('id', '522068696416387093'); //ايدي الروم
if (!channel) return;
channel.send(`**Ꮃelcome Ꭲo Ꮪerver Cálin..**`)
}});









 
client.login(process.env.BOT_TOKEN);
