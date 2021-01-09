const Discord = require('discord.js');
const db = require('quick.db');
const chalk = require('chalk')
const moment = require('moment');
require('moment-duration-format');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {

  const duration = moment.duration(client.uptime).format('D [gün], H [saat], m [dakika], s [saniye]');
      
let shardinfo = {
        ping: await client.shard.fetchClientValues('ping'),
        server_count: await client.shard.fetchClientValues('guilds.size'),
        user_count: await client.shard.fetchClientValues('users.size'),
        uptime: await client.shard.fetchClientValues("uptime")
    }
let i = client.shard.id
    let shardembed = new Discord.RichEmbed()
    .setTitle('Shard bilgi/İstatistik')
    .setFooter('Bu Sunucunun Shardı İdsi: ' + client.shard.id + '')
    .setColor(ayarlar.token)
    
    for(i=0;i<client.shard.count;i++) {
        shardembed.addField(`🔹**Shard ${i}**`, `▫️ **Ping:** ${Math.round(shardinfo.ping[i])}ms\n▫️ **Sunucu:** ${shardinfo.server_count[i]}\n▫️ **Kullanıcı:** ${shardinfo.user_count[i]}\n▫️ **Uptime:** ${moment.duration(shardinfo.uptime[i]).format(`D [Gün] , H [Saat], m [Dakika], s [Saniye]`)} `, true)
    }
    message.channel.send(shardembed)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
  kategori: "bot",
};

exports.help = {
  name: 'shard',
  description: 'Botun Shard Bilgilerini Gösterir.',
  usage: 'shard',

};