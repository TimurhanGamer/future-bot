const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
let a = ayarlar.prefix
    let p = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
 let o = await db.fetch(`prefix.${message.guild.id}`)
 if(!args[0]) return message.channel.send(new Discord.RichEmbed()
                                          .setThumbnail(client.user.avatarURL)
                                          .setAuthor(`Future Prefix Settings`, client.user.avatarURL)
                                          .setColor("#93ca6d")
.setDescription(`**SOON**`));
  
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['p'],
    permLevel: 0
};
  
  exports.help = {
    name: 'prefix',
    description: 'Komuttan sonra yazdığınız şekli prefix olarak dbye kaydedip message.jsde eğer prefixle başlamassa return mantık bu',
    usage: 'prefix <giriceğiniz şey>'
};