module.exports = {
name: 'joinvc',
async execute(client, message, args) {
let lol = message.mentions.channels.first().id;
let chann = client.channels.cache.get(`${lol}`)
chann.join()
message.channel.send({
    embed: { color: '#a1bffc', description: '✅ Connected' }
});
}
}
