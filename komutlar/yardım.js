const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
exports.run = async (client, message, args) => {
let a = ayarlar.prefix
    let p = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
 let o = await db.fetch(`prefix.${message.guild.id}`)

let botid = ('723101104052895744') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor("#93ca6d")
        .setTitle(`${client.user.username} - Commands`)
        .setDescription(` <a:komutlar:723136346679672866> **\`f!moderations\`** Moderations Commands.\n  <a:komutlar:723136346679672866> **\`f!members\`** Member Commands.\n  <a:komutlar:723136346679672866>  **\`f!funny\`** Funny Coomands.\n  <a:komutlar:723136346679672866> **\`f!game\`**  Game Commands.\n` + `<a:komutlar:723136346679672866> **\`f!level-help\`**  Level Commands.\n`)  
        .setThumbnail(client.user.avatarURL)
        .addField(`» Invite Links`, `[Bot Invite Link](https://discord.com/oauth2/authorize/?permissions=2146959103&scope=bot&client_id=723101104052895744) **|** [Support Server](https://discord.gg/bcmjnJs)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
        .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL)
        .setImage("")  
    return message.channel.sendEmbed(embed);
  
 } 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0,
};

exports.help = {
  name: 'help',
  description: '',
  usage: ''
};