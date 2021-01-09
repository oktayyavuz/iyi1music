const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('RANDOM')
.addField('Music Bot | Müzik Komutları',`
**!çal <şarkıismi>** : Belirttiğiniz Şarkıyı Sesli Odada Söyler
**!duraklat** : Çalan Şarkıyı Durdurur
**!devam** : Durdurduğunuz Şarkıyı Devam Ettirir
**!tekrar** : Çalan Şarkıyı Tekrarlar
**!geç** : Bi Sonraki Şarkıya Geçiş Yapar
**!durdur** : Şarkıyı Durdurur 
**!çek** : Botu Sese Çeker 
**!ses** : Ses Seviyesini Belirler`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail("https://media.giphy.com/media/Z9WQLSrsQKH3uBbiXq/giphy.gif")
.setImage("https://media.giphy.com/media/l46CqqobS7VRaIpSE/giphy.gif")

 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["müzik"], 
  permLevel: 0
};
exports.help = {
  name: 'müzik'
};
  