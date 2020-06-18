const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
let prefix = 'f!'
module.exports = client => {
  
  const aktiviteListesi = [
    '💪 7/24 Online!',
    '💡 f!invite | Add our bot',
    `👨 ${client.users.size} Users!`,
    `🌍 Service on ${client.guilds.size} Servers`,
    'f!help 🔥 + f!invite 🔥 + f!auto-role',
    'sa'
  ]

  client.user.setStatus('online')
  
  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 1))
    client.user.setActivity(aktiviteListesi[Aktivite])
  }, 5000)
}
console.log(`[BOT]: Giriş Yaptı! Komutlar Yüklendi! Rektors'e Aittir!`);