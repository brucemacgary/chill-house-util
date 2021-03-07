const Discord = require("discord.js");

module.exports = {
name: "setnickname",
aliases: ['nick'],
async execute(client, message, args){
  
  // You can make a single array to detect the user permissions.
  
  
  let user = message.author;
  
  let nick = args.join(" ");
  if (!nick) return message.channel.send({embed: {color: "RED", description: "You need to input the nickname!"}});
  
  let member = message.guild.members.cache.get(user.id);
  
  await member.setNickname(nick).catch(err => message.channel.send({embed: {color: "RED", description: `Error: ${err}`}}));
  return message.channel.send({embed: {color: "GREEN", description: `Successfully changed **${user.tag}**'s nickname to **${nick}**`}});
}}
