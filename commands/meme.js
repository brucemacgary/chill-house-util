const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "meme",
  description: "Shows memes that makes you haha",
  category: "games",
  async execute(client, message, args) {
    const data = await fetch(
      "https://www.reddit.com/r/memes/random/.json"
    ).then((res) => res.json());

    const children = data[0].data.children[0];
    const permaLink = children.data.permalink;
    const url = `https://reddit.com${permaLink}`;
    const image = children.data.url;
    const title = children.data.title;
    const upvotes = children.data.ups;
    const comments = children.data.num_comments;

    const embed = new MessageEmbed()
      .setColor('#a1bffc')
      .setTitle(`${title}`)
      .setURL(url)
      .setImage(image)
      .setFooter(`👍 ${upvotes} | 💬 ${comments}`);

    message.channel.send({ embed });
  },
};
