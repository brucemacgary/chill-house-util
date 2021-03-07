const discord = require("discord.js");

module.exports = {
    name: "ping",
    aliases: ["pong"],
    category: "Utility",
    usage: "ping",
    description: "Get the bot's ping!",
    async execute(client, message, args){

     let start = Date.now();
  
  message.channel.send({embed: {description: "Ping?", color: "ff0000"}}).then(m => {
    
    let end = Date.now();
    
    let embed = new discord.MessageEmbed()
    .setAuthor("Pong!🏓", message.author.avatarURL())
    .addField("API Latency", Math.round(client.ws.ping) + "ms", true)
    .addField("Message Latency", end - start + "ms", true)
    .setColor('#a1bffc');
    m.edit(embed).catch(e => message.channel.send(e))
    
  })

    }
};
