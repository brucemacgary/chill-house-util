const discord = require("discord.js");

module.exports = {
    name: "avatar",
    aliases: ['av'],
    execute(client, message, args){

let user = message.mentions.users.first() || message.author;

let embed = new discord.MessageEmbed()
.setTitle(`${user.username}'s Avatar!`)

.setImage(user.avatarURL({size: 2048, dynamic: true}))
.setColor('#a1bffc');
message.channel.send(embed);

    }
};
