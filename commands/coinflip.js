const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const n = Math.floor(Math.random() * 2);
    let result;
    if (n === 1) result = 'heads';
    else result = 'tails';
    const embed = new MessageEmbed()
    embed
      .setTitle(':coin:  Coinflip  :coin:')
      .setDescription(`I flipped a coin for you, ${message.member}. It was **${result}**!`)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      
      .setColor(message.guild.me.displayHexColor);
      
    message.channel.send(embed);
}  


module.exports.help = {
  name:"coinflip"
}
