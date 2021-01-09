const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube('AIzaSyApi8Z45osNXPksUMiaItOhXsNRyRdDtto');

exports.run = async (client, message, args) => {
    const queue = client.queue;
  
    var searchString = args.slice(0).join(' ');
    var url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
    var serverQueue = queue.get(message.guild.id);

    var voiceChannel = message.member.voiceChannel;
        
      const asd1 = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`Bir sesli kanalda değilsin.`)  
    if (!message.member.voiceChannel) return message.channel.send(asd1);
    const asd2 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`**Şu anda herhangi bir şarkı çalmıyor.**`)
    if (!serverQueue) return message.channel.send(asd2);

    if (!args[0]) return message.reply("**Ses seviyesi ayarlamak için bir sayı yaz!**");
    serverQueue.volume = args[0];
    if (args[0] > 10) return message.channel.send(`Ses seviyesi en fazla \`10\` olarak ayarlanabilir.`)
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0]);
    const volumeLevelEdit = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`**Ayarlanan Ses Seviyesi:** **${args[0]}**`)
    return message.channel.send(volumeLevelEdit);

};

exports.conf = {
    enabled: true,
    aliases: ['volume'],
    permLevel: 0
};

exports.help = {
    name: 'ses',
    description: 'Muziğin sesini ayarlar.',
    usage: 'ses sayı'
};