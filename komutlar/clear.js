const Discord = require('discord.js');
exports.run = function(client, message, args) {
  
  const temizle = new Discord.RichEmbed()
  
    .setColor("#93ca6d")
.addField('<a:hype:722523040549961779> Successful!', `<a:Tamir:722523606961356951> ** \`${args[0]}\` Posts Removed **`)
        .setTimestamp()
    .setFooter(`${message.author.username} `, message.author.avatarURL)  
  
    const sayı = new Discord.RichEmbed()
  
    .setColor("#93ca6d")
.addField('<a:hype:722523040549961779> Bilgi', `<a:Tamir:722523606961356951> **Please write the amount of message to be deleted!**`)
        .setTimestamp()
    .setFooter(`${message.author.username} `, message.author.avatarURL)  
  
    const yetki = new Discord.RichEmbed()
    
    .setColor("#93ca6d")
.addField('<a:hype:722523040549961779> Bilgi', "<a:reinbow:722523519644336309> **you can't use that.**")
        .setTimestamp()
    .setFooter(`${message.author.username} `, message.author.avatarURL) 
  
  
  
  
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(yetki);
if(!args[0]) return message.channel.send(sayı);
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(temizle)
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['temile'],
  permLevel: 2,
  kategori: "moderasyon"
};

exports.help = {
  name: 'clear',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};