const Discord = require("discord.js")
 module.exports = {
        name: "eval",
async execute(client, message, args) {
 
  if(message.author.id == `501987283453607947 || 663331678080729148`) return;

    const command = message.content.split(' ').slice(1).join(' ');
    message.channel.send(
`\`\`\`js\n
${eval(command)}
\`\`\``);

  }
   
      }
