const Discord = require('discord.js')
const client = new Discord.Client();

const prefix = 'czaru!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}


client.once('ready', () =>{
    console.log('Czarna Mamba jest gotowa do akcji!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }else if(command === 'oskar-na-yt'){
        client.commands.get('oskar-na-yt').execute(message, args);
    }
});

client.login('');
