const { MessageEmbed } = require ('discord.js');
const moment = require('moment')
moment.locale('en');
module.exports = {
    name: 'platform',
    aliases: ['pf'],
    description: 'Information of the user.',
    execute(client, message, args){

            let member = message.mentions.members.first() || message.member,
            user = member.user;
            if (user.bot){
                message.channel.send({
                    embed : { description: 'Please mention a human account!', color: 'RED' }
            })
        }
            let embed = new MessageEmbed()
            .setTitle('Platform')
            .setColor('#a1bffc')
            
            
              if (user.presence.clientStatus && !user.bot) {
                    if (user.presence.clientStatus.mobile) embed.addField('**Using discord on**', `<:Mobile:817019164878962788> Mobile App`, true);
                    if (user.presence.clientStatus.desktop) embed.addField('**Using discord on**', `💻 Desktop App`,true);
                    if (user.presence.clientStatus.web) embed.addField('**Using discord on**', `🌐 Desktop Web`, true);
                } else {
                    embed.setDescription('The user is either invisible or offline.')
                }
                message.channel.send({embed});
        }
}
