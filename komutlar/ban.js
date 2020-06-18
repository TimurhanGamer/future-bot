const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('You should write down the reason.');
  if (message.mentions.users.size < 1) return message.reply("You should write down who you're going to ban.").catch(console.error);

  if (!message.guild.member(user).bannable) return message.reply("YI can't ban the authorities.");
  message.guild.ban(user, 2);

  const embed = new Discord.RichEmbed()
    .setColor("#93ca6d")
    .setTimestamp()
    .addField('<a:hayir:722523410277728367> Verb:', 'Banned from Server <a:nice:722522873163415592> ')
    .addField('<a:hayir:722523410277728367> Banned User:', `<@${user.id}>`)
    .addField('<a:hayir:722523410277728367> Ban Authority:', `<@${message.author.id}>`)
    .addField('<a:hayir:722523410277728367> Reason for Prohibition:', reason);
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi sunucudan yasaklar.',
  usage: 'ban [kullanıcı] [sebep]'
};