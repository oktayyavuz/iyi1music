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
        
    const err1 = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(`**Bir sesli kanalda değilsin.**`)  
    if (!voiceChannel) return message.channel.send(err1);
    const err2 = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(`**Şu anda herhangi bir şarkı çalmıyor.**`)
    if (!serverQueue) return message.channel.send(err2);
    serverQueue.songs = [];
    const songEnd = new RichEmbed()
    .setColor("B71C1C")
    .setDescription(`**Şarkı kapatıldı**`)
    serverQueue.connection.dispatcher.end('');
    message.channel.send(songEnd);
};

exports.conf = {
    enabled: true,
    aliases: ['stop'],
    permLevel: 0
};

exports.help = {
    name: 'bitir',
    description: 'Oynatılan/çalan şarkıyı kapatır.',
    usage: 'bitir'
};