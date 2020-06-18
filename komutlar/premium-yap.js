const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
 
  let nesne = args[0]
  if (!nesne) return message.channel.send("Should you enter a user's ID?")
  
  db.set(`gold_${nesne}`, 'gold')
  
  message.channel.send(`**${nesne}** User with ID is now a Premium member!`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};
exports.help = {
  name: 'add-premium',
  description: '[Admin Komutu]',
  usage: 'karaliste <ID>'
};
   