const Discord = require("discord.js")
const MessageEmbed = require('discord.js')
module.exports = {
    name: 'nick',
    aliases: ['nickname'],
    description: 'Change nickname of the user.',
    usage: ['mention nick'],
    guildOnly: true,
    execute(message, args, client) {
        let userinfoget =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]) ||
            message.guild.member(message.author);

        if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply("You do not have permission!");
        if (!message.guild.member(client.user).hasPermission('MANAGE_NICKNAMES')) return message.reply('Sorry, i dont have the perms to do this cmd i need MANAGE_NICKNAMES. :x:')
        if (message.mentions.users.size < 1) return message.reply('You must mention someone to change the users nickname. ')
        let user = message.guild.member(message.mentions.users.first());
        let author = user.roles.highest.position;
        let target = message.member.roles.highest.position;
        if (author > target) return message.reply('I cant change that members nickname. They are the same level as you or higher. ');
        let newusername = args.slice(1).join(' ')
        if (newusername.length < 1) {
            message.guild.members.cache.get(user.user.id).setNickname(user.user.username);
            const embed = new Discord.MessageEmbed()
                .setColor(userinfoget.displayHexColor)
                .setTitle("Nickname reseted successfully!");

            message.reply({ embed })
            return;
        }
        message.guild.members.cache.get(user.user.id).setNickname(newusername);
        const embed = new Discord.MessageEmbed()
            .setColor(userinfoget.displayHexColor)
            .addField("Username set successfully! ", '`'+ newusername + "` is now the nickname for " + user.user.username + " :white_check_mark:");
        message.reply({ embed })
    }
}