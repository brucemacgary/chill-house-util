const discord = require("discord.js");
const figlet = require("figlet");

module.exports = {
    name: "ascii",
    execute(client, message, args){

   let text = args.join(" ");
   if(!text) {
return message.channel.send({
    embed: { description: 'Please type the text you want to convert to ascii', color: '#a1bffc' }
})
}
   let maxlen = 20
if(text.length > 20) {
return message.channel.send({
    embed: { description: 'Please type something below 20 characters!', color: '#a1bffc' }
})
}

figlet(text, function(err, data) {
message.channel.send(data, {
code: 'AsciiArt' 
});
})

    }
};
