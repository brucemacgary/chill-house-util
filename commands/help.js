const { MessageEmbed } = require('discord.js')
const { stripIndents } = require('common-tags');

module.exports = {
    name: "help",
    execute(client, message, args) {
        const embed = new MessageEmbed()
        .setAuthor('Chill House Utilities', client.user.displayAvatarURL())
        .setColor('#a1bffc')
        .setTitle('Help Menu')
        .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        .setDescription('`amazeme`, `ascii`, `avatar`, `ban`, `discord`, `embed`, `eval`, `heal`, `help`, `imdb`, `invite`, `joinvc`, `kick`, `meme`, `nick`, `ping`, `platform`, `report`, `rules`, `server`, `topic`, `userinfo`, `voice-rules`, `wel`')
        .setFooter('Want to invite someone in this guild? Do .invite!', message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}
