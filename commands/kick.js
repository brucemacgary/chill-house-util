const { MessageEmbed } = require("discord.js")
module.exports = {
name: "kick",

async execute(client, message, args) {

  if (!message.member.hasPermission("KICK_MEMBERS")  && message.author.id !== "761469922563063818") return message.channel.send("Sorry, you don't have permissions to use this!");
    
  let xdemb = new MessageEmbed()
  .setColor("#ff0000")
  .setTitle("Kick Command")
  .addField("Description:", `Kick a member`, true)
  .addField("Usage:", "!kick [user] [reason]", true)
  .addField("Example:" ,"!kick @fool spam")

    let member = message.mentions.members.first();
    if(!member) return message.channel.send(xdemb)
      
    if(!member.kickable) 
      return message.channel.send("<:MItoCross:769434647234347009> I cannot kick this user!");
   if(member.user.id === "501987283453607947") return message.channel.send("<:MItoCross:769434647234347009> I can't kick my owner!")

    
    let reason = args.slice(1).join(' ');
    if(!reason) {
      res = "No reason given";
    }
    else {
      res = `${reason}`
    }
    
    await member.kick(reason)
      .catch(error => message.reply(`Sorry, I couldn't kick because of : ${error}`));

      let kick = new MessageEmbed()
      .setColor("#ff0000")
      .setDescription(`✅ ***${member.user.tag} was kicked*** | ${res}`)
   

      message.channel.send(kick)

    message.delete();
    
}
      }
