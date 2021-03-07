const { MessageEmbed } = require("discord.js")

//ban command
module.exports = {
name: "ban",
async execute(client, message, args) {

let xdemb = new MessageEmbed()
        .setColor("#ff0000")
        .setTitle("Ban Command")
        .addField("Description:", `Ban a member`, true)
        .addField("Usage:", `!ban [user] [reason]`, true)
        .addField("Example:", `!ban @fool spam`)

        if(!message.member.hasPermission("BAN_MEMBERS") && message.author.id !== "291221132256870400") return message.channel.send("<:MItoCross:769434647234347009> Sorry you don't have permission to use this!");

        let member = message.mentions.members.first();
        if(!member) return message.channel.send('https://tenor.com/view/banned-thor-banned-thor-ban-thor-admin-gif-12850590')
        if(!member.bannable) return message.channel.send("<:MItoCross:769434647234347009> I can't ban this user!")
        if(member.user.id === "501987283453607947") return message.channel.send("<:MItoCross:769434647234347009> I can't ban my owner!")

        if(member.id === message.author.id) return message.channel.send("<:MItoCross:769434647234347009> You can't ban your self")

        let reason = args.slice(1).join(" ");

        if(!reason) {
            res = "No reason given";
        } else {
            res = reason
        }

        await member.ban({reason: reason}).catch(error => message.channel.send(`Sorry, I couldn't ban because of: ${error}`));

        let bean = new MessageEmbed()
        .setColor("#ff0000")
      .setDescription(`✅ ***${member.user.tag} was banned*** | ${res}`)

        message.channel.send(bean)

        message.delete()

      }}
    
