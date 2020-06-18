const Discord = require('discord.js');

let botid = ('723101104052895744') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("#93ca6d")
            .setThumbnail(client.user.avatarURL)
    .setAuthor(`Future Contact Information`, client.user.avatarURL)
    .setDescription("Special Role for those who invite the bot to your server :)")
.addField(`» Invite Links`, `[Bot Invite Link](https://discord.com/oauth2/authorize/?permissions=2146959103&scope=bot&client_id=723101104052895744) **|** [Support Server](https://discord.gg/bcmjnJs)`)
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["invite"],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: 'bot hakkında bilgi',
  usage: 'davetet'
};
   