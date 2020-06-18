const Discord = require('discord.js');

exports.run = (client, message, args) => {
    

let mention = message.mentions.users.first();
let sender = "";

if (message.channel.guild.member(message.author).nickname == null) {
  sender = message.author.username;
} else {
  sender = message.channel.guild.member(message.author).nickname;
}

if (mention != null || mention != undefined) {
  var name = mention.username + "'s ";
  if (mention.username.endsWith("s")) {
    name = mention.username + "' ";
  }
  const avatarEmbedOther = new Discord.RichEmbed()
  .setAuthor(mention.username, mention.avatarURL)
  .setColor(0x3)
  .setImage(mention.avatarURL)
  .setFooter(`requested by ${message.author.tag}.`, message.author.avatarURL)
  //.setDescription(`[Show the bigger version of the avatar!](${message.author.avatarURL})`);
  message.channel.sendEmbed(avatarEmbedOther);
  return;
} else {
  const avatarEmbedYou = new Discord.RichEmbed()
  .setAuthor(sender, message.author.avatarURL)
  .setColor(0x3)
  .setImage(message.author.avatarURL)
  .setFooter(`requested by ${message.author.tag}.`, message.author.avatarURL)
  //.setDescription(`[Show the bigger version of the avatar!](${message.author.avatarURL})`);
  message.channel.sendEmbed(avatarEmbedYou);
  return;
}
message.channel.sendMessage("Something went wrong");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['avatar'],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'avatar',
  usage: 'avatar',
  category: "Kullanici"
};