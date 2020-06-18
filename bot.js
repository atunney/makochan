// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

const config = require('./config.json');

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

// login to Discord with your app's token
client.login(config.token);

client.on('message', message => {
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
});

client.on('message', message => {
    if (message.content === '!p1') {
        message.channel.send('https://www.youtube.com/watch?v=5Iaj92s-uJA');
    }
});

/* Todo:
    Music from Youtube, possibly Spotify?
    Random Persona facts/trivia
    Cats
    Each persona opening

*/