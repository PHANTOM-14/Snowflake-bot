const { Discord } = require('discord.js');
const db = require('quick.db')
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'welcomechannel',
    aliases: ['wch', 'setwch'],
    description: 'Setup the channel where welcome message will be posted',

    async execute(message, args, client) {
        let userinfoget =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]) ||
            message.guild.member(message.author);

        guild = message.guild;
        if (!message.member.hasPermission("MANAGE_SERVER")) return message.reply("You do not have permission!\n REQUIRED - MANAGE_SERVER");

        if (!args[0]) return message.reply(`mention a valid channel!!`)
        let content = message.mentions.channels.first().id;

        if (!content) return message.reply(`mention a valid channel!!`)

        await db.set(`wch-${message.guild.id}`, content)
        const embed = new MessageEmbed()
            .setDescription(`You have been setted welcome channel to <#${content}>`)
            .setColor(userinfoget.displayHexColor)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}