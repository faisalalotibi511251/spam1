const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
var prefix = "1";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "510241151895470092"; // ايدي السررفر
var channel = "510241151895470096";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**hello , hello , hello , hello , hello , hello ,hello ,  hello , hello , hello , hello , hello , hello , hello , hello , hello , hello , hello , hello , **')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

client2.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , فيصل , فيصل , فيصل, فيصل , فيصل , فيصل , فيصل , فيصل , Ez Farm ,  ملعوبن فيه الدنيا **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});






client3.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
       message.channel.send(`**Credit Spam , فيصل , فيصل , فيصل, فيصل , فيصل , فيصل , فيصل , فيصل , Ez Farm ,  ملعوبن فيه الدنيا **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});













 
client.login(process.env.BOT_TOKEN);
client.login(process.env.BOT_TOKEN2);
client.login(process.env.BOT_TOKEN3);
