const { MessageEmbed } = require('discord.js')
module.exports = {
name: 'important-messages',
aliases: ['imp', 'important'],
execute(client, message, args){

    const embed = new MessageEmbed()
    .setColor('#a1bffc')
    .setTitle('Important Server Messages')
    .setDescription('Rules: [Click here](https://discord.com/channels/707186051357212692/740788608117637211/788281690564984853)');
    message.channel.send(embed)
}
}
