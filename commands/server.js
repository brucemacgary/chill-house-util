const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'server',
    aliases: ['si', 'chillhouse', 'ch', 'stats'],
    async execute(client, message, args){
        const members = message.guild.members.cache;
        const banned = await message.guild.fetchBans();
        const embed = new MessageEmbed()
        .setColor('#a1bffc')
        .setAuthor('Chill House', message.guild.iconURL({ dynamic: true }))
        .setDescription('This is the official bot of the community discord server Chill House.\n</> by Bruce')
        .setTitle('Server Statistics')
        .addField('Owner', 'BruceMacGary')
        .addField('Membercount', `Total: \`${message.guild.memberCount}\`\nOnline: \`${members.filter(m => m.presence.status === 'online').size}\`\nIdle: \`${members.filter(m => m.presence.status === 'idle').size}\`\nDND: \`${members.filter(m => m.presence.status === 'dnd').size}\`\nInvisible: \`${members.filter(m => m.presence.status === 'offline').size}\``)
        .addField('Roles', `\`${message.guild.roles.cache.size}\``)
        .addField('Emoji', `\`${message.guild.emojis.cache.size}\``)
        .addField('Ban Count', `\`${banned.size}\``)
        .addField('Channels', `Text: \`${message.guild.channels.cache.filter(ch => ch.type === 'text').size}\`\nVoice: \`${message.guild.channels.cache.filter(ch => ch.type === 'voice').size}\``)
        .setFooter('Want to invite your friends here? Do .invite', message.author.displayAvatarURL({ dynamic:  true }))
        message.channel.send(embed)
    }


}