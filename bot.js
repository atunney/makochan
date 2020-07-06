// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

const config = require('./config.json');

const ytdl = require('ytdl-core');

const queue = new Map();


// when the client is ready, run this code; the event will only trigger one time after logging in
client.once('ready', () => {
    console.log('Logged in as ' + client.user.id + '!');

    const ran = Math.random();
	if (ran >= 0 && ran < 0.50) {
        client.channels.cache.get('717559240788541471').send('Charge, Johanna!');
    }
    else {
        client.channels.cache.get('717559240788541471').send('Anat, come!');
    }
    client.user.setActivity('Persona 5');
});

client.on('message',  message => {
    if (message.content.startsWith(config.prefix)) {
      if (message.content === '!ping') {
          // send back "Pong." to the channel the message was sent in
          message.channel.send('pong');
      }

      if (message.content.toLowerCase() === 'hi mako-chan') {
          message.channel.send('Hi, <@' + message.author.id + '>!');
      }

      if (message.content === config.prefix + 'persona') {
          const ran = Math.floor(Math.random() * 43);
          console.log(ran);
          message.channel.send({files: ['./memes/' + ran + '.png']})
      }

      if (message.content.toLowerCase() === config.prefix + 'commands') {

      }

      else {
        message.channel.send("Please enter a valid command!");
      }
    }
});

client.on('message', message => {

    const serverQueue = queue.get(message.guild.id);
    switch(message.content) {
        case '!p1':
            message.content = `!play https://www.youtube.com/watch?v=5Iaj92s-uJA`;
            execute(message, serverQueue);
            break;
        case '!revelations':
            message.content = `!play https://www.youtube.com/watch?v=mBoe21629vM`;
            execute(message, serverQueue);
            break;

        case '!p2is1':
            message.channel.send('https://www.youtube.com/watch?v=VIBbdYTnN8U');
            break;

        case '!p2is2':
            message.channel.send('https://www.youtube.com/watch?v=-sI4ODaGXQc');
            break;

        case '!p2ep1':
            message.channel.send('https://www.youtube.com/watch?v=aw9NY6R05kY');
            break;

        case '!p2ep2':
            message.channel.send('https://www.youtube.com/watch?v=R1bgbfEPUog');
            break;

        case '!p3':
            message.channel.send('https://youtu.be/XxNAwZ-A88w?t=7');
            break;

        case '!p3fes':
            message.channel.send('https://www.youtube.com/watch?v=lGjPut-k-7U');
            break;

        case '!p3p':
            message.channel.send('https://www.youtube.com/watch?v=kd1xnZJZZHQ');
            break;

        case '!p4':
            message.channel.send('https://youtu.be/h73LvR8V2LA?t=7');
            break;
    }//p4d, etc. pq
});

//Credit play, skip, stop functionality: https://gabrieltanner.org/blog/dicord-music-bot
client.on("message", async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith('!')) return;
  
    const serverQueue = queue.get(message.guild.id);
  
    if (message.content.startsWith(`!play`)) {
      execute(message, serverQueue);
      return;
    } else if (message.content.startsWith(`!skip`)) {
      skip(message, serverQueue);
      return;
    } else if (message.content.startsWith(`!stop`)) {
      stop(message, serverQueue);
      return;
    }
    else if (message.content.startsWith('!queue')) {
        songQueue(message, serverQueue);
    }
  });
  
  async function execute(message, serverQueue) {
    const args = message.content.split(" ");
  
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel)
      return message.channel.send(
        "You need to be in a voice channel to play music!"
      );
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
      return message.channel.send(
        "I need the permissions to join and speak in your voice channel!"
      );
    }
  
    const songInfo = await ytdl.getInfo(args[1]);
    const song = {
      title: songInfo.title,
      url: songInfo.video_url
    };
  
    if (!serverQueue) {
      const queueContruct = {
        textChannel: message.channel,
        voiceChannel: voiceChannel,
        connection: null,
        songs: [],
        volume: 5,
        playing: true
      };
  
      queue.set(message.guild.id, queueContruct);
  
      queueContruct.songs.push(song);
  
      try {
        var connection = await voiceChannel.join();
        queueContruct.connection = connection;
        play(message.guild, queueContruct.songs[0]);
      } catch (err) {
        console.log(err);
        queue.delete(message.guild.id);
        return message.channel.send(err);
      }
    } else {
      serverQueue.songs.push(song);
      return message.channel.send(`${song.title} has been added to the queue!`);
    }
  }
  
  function skip(message, serverQueue) {
    if (!message.member.voice.channel)
      return message.channel.send(
        "You have to be in a voice channel to stop the music!"
      );
    if (!serverQueue)
      return message.channel.send("There is no song that I could skip!");
    serverQueue.connection.dispatcher.end();
  }
  
  function stop(message, serverQueue) {
    if (!message.member.voice.channel)
      return message.channel.send(
        "You have to be in a voice channel to stop the music!"
      );
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
  }
  
  function play(guild, song) {
    const serverQueue = queue.get(guild.id);
    if (!song) {
      serverQueue.voiceChannel.leave();
      queue.delete(guild.id);
      return;
    }
  
    const dispatcher = serverQueue.connection
      .play(ytdl(song.url))
      .on("finish", () => {
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0]);
      })
      .on("error", error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    serverQueue.textChannel.send(`Now playing: **${song.title}**`);
  }

function songQueue(message, serverQueue) {
    i = 1;
    if (serverQueue && serverQueue.songs[1] != null) {
        message.channel.send("Songs currently in the queue: ");
        while (serverQueue.songs != null) {
            message.channel.send(`${i}: ${serverQueue.songs[i].title}`);
            i++;
        }
        return;
    }
    else {
        return message.channel.send("The queue is currently empty!");
    }
}

// login to Discord with your app's token
client.login(config.token);


/* Todo:
    Random Persona facts/trivia
    Cats
*/