
const { Client, Collection, MessageEmbed } = require("discord.js");

const { readdirSync } = require("fs");
const ms = require("ms");
const { join } = require("path");
const { TOKEN, PREFIX } = require("./config.json");

const client = new Client({ disableMentions: "everyone" });

client.login(TOKEN);
client.commands = new Collection();
client.prefix = PREFIX;
client.queue = new Map();
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

client.on("ready", () => {
	console.log(`${client.user.tag} ready!`);
	client.user.setPresence({ activity: { name: `Chill House`, type: "WATCHING" }, status: 'dnd' })

});



client.on('guildMemberAdd', (member) => {
	let like = new MessageEmbed()
		.setAuthor(`${member.user.tag} (${member.user.id})`, member.user.displayAvatarURL({ dynamic: true }))
		.setColor('GREEN')
		.setFooter('User Joined')
		.setTimestamp();

	let embeb = new MessageEmbed()
		.setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true }))
		.setColor('#a1bffc')
		.setDescription(`**${member.user.username}** joined **Chill House**!`)
		.setFooter(`Member #${member.guild.memberCount}`, member.guild.iconURL({ dynamic: true }));
	client.channels.cache.get('809632100771954688').send(like)
	client.channels.cache.get(`710349584773414914`).send(embeb);
});



client.on('guildMemberRemove', (member) => {
	let lik = new MessageEmbed()
		.setAuthor(`${member.user.tag} (${member.user.id})`, member.user.displayAvatarURL({ dynamic: true }))
		.setColor('RED')
		.setFooter('User Left')
		.setTimestamp();
	client.channels.cache.get('809632100771954688').send(lik)
});

client.on("warn", (info) => console.log(info));
client.on("error", console.error);

/**
 * Import all commands
 */
// client.on("ready", () => {
// setInterval(() => client.commands.get('meme').execute(client), 1000 * 60);
// });

const commandFiles = readdirSync(join(__dirname, "commands")).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
	const command = require(join(__dirname, "commands", `${file}`));
	client.commands.set(command.name, command);
}

// client.on("message", async (message) => {
// if (!message.author.bot && message.content.match(/fuck/i)) await message.channel.send('https://tenor.com/view/rick-roll-gif-18401155');
// });

client.on("message", async (message) => {
if (!message.author.bot && (message.content.match(/report/i) && !message.content.match(/.report/i))) await message.channel.send({
embed: { description: 'type `.report <user> <reason>`', title: 'How To Report a user breaking a rule?', color: '0xa1bffc' }
});
});

client.on("message", async (message) => {
if (!message.author.bot && message.content.match(/<@501987283453607947>/i)) await message.react('752049967937355888');
});

client.on("message", async (message) => {
if (!message.author.bot && message.content.match(/dead chat/i)) await message.channel.send(`How's your mother ${message.author}?  Tell her <#710349584773414914> hasn't been the same since she retired! She ever find out who your father is?`);
});

	
client.on("message", async (message) => {
	if (message.author.bot) return;
	if (!message.guild) return;

	const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\\s*`);

	if (!prefixRegex.test(message.content) && message.channel.id === '811597075077660682') {
		try {
			const msg = await message.channel.send({
				embed: {
					color: 0xa1bffc,
					author: {
						name: message.author.tag,
						icon_url: message.author.displayAvatarURL({ dynamic: true, size: 2048 })
					},
					timestamp: new Date(),
					description: message.content.substring(0, 2048)
				}
			});

			await message.delete();

			for (const emo of ['817986902740566027', '817991218491162644']) {
				await msg.react(emo);
			}
		} catch (err) {
			message.channel.send(err.toString());
		}
	} 
	
	if (!prefixRegex.test(message.content) && message.channel.id === '811597100948914176') {
		try {
			await message.channel.send({
				embed: {
					color: "RANDOM",
					title: 'Anonymous Confession',
					footer: {
						name: "To confess, just send a message in this channel"
					},
					timestamp: new Date(),
					description: message.content.substring(0, 2048)
				}
			});

			await message.delete();

		} catch (err) {
			message.channel.send(err.toString());
		}
	}

	if (!prefixRegex.test(message.content)) return;

	const [, matchedPrefix] = message.content.match(prefixRegex);

	const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command =
		client.commands.get(commandName) ||
		client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 1) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(
				`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`
			);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);


	try {
		command.execute(client, message, args);
	} catch (error) {
		console.error(error);
		message.reply("There was an error executing that command.").catch(console.error);
	}
});
