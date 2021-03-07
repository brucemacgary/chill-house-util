const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'vc',
    alises: ['vc-rule', 'voice', 'voice-rules'],
    execute(client, message, args) {
        const embed = new MessageEmbed()
        .setTitle('Voice Channel Rules')
        .setDescription('[1.](https://www.youtube.com/watch?v=dQw4w9WgXcQ) Do not queue NSFW noises, ear rape or disturb others in any way in voice channels.\n[2.](https://www.youtube.com/watch?v=dQw4w9WgXcQ) Playing songs through your mic will result in a mute.\n[3.](https://www.youtube.com/watch?v=dQw4w9WgXcQ) No bullying in any form.\n[4.](https://www.youtube.com/watch?v=dQw4w9WgXcQ) Do not use a voice changer or text-to-speech software.\n[5.](https://www.youtube.com/watch?v=dQw4w9WgXcQ) Do not use words that will spark controversy. Racial slurs will be treated very seriously.\n[6.](https://www.youtube.com/watch?v=dQw4w9WgXcQ) Please make sure you notify everyone that you intend to record the conversation and wait for everyone\'s assent before you do so.\n[7.](https://www.youtube.com/watch?v=dQw4w9WgXcQ) Do not argue with Administrators or Moderators about the rules.')
        .setFooter('Do not click on the numbers.')
        .setColor('#a1bffc');
        message.channel.send(embed)
    }
    
}