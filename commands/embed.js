const { MessageEmbed } = require("discord.js")
 module.exports = {
        name: "embed",
async execute(client, message, args) {
    const result = args.join(' ').split('|');
    const color = result[0];
    const title = result[1]
    const description = result[2]
    const foot = result[3]
    const ig = result[4]
    const bigimg = result[5]
    const channelll = message.mentions.channels.first();
  
    
 if (!message.member.roles.cache.find(r => r.id === '787308422637944862')) return message.channel.send('lol noob you not have the perms to use this cmd.');
   
 const embed = new MessageEmbed()
    
   
if(result[0]){
embed.setColor(`${color}`)
}
if(result[1]){
embed.setTitle(`${title}`)
}
  if(result[2]){
embed.setDescription(`${description}`)
} 
   if(result[3]){
embed.setFooter(`${foot}`)
   }
if(result[4]){
embed.setThumbnail(`${ig}`)
}
    if(result[5]){
embed.setImage(`${bigimg}`)
}
 
 const chan = client.channels.cache.get(`${channelll.id}`)
    chan.send(embed);
  
  
  }
   
      }
