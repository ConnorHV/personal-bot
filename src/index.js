require('dotenv').config();
const { Client, IntentsBitField, ActivityType } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

let status = [
    {
        name: 'ConnrHV learn javascript',
        type: ActivityType.Watching,
    },
    {
        name: 'ConnorHV Code me',
        type: ActivityType.Watching
    },
];

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online!`);

    setInterval(() => {
        let random = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[random]);   
    }, 10000);
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'add') {
        const num1 = interaction.options.get('first-number').value;
        const num2 = interaction.options.get('second-number').value;

        console.log(num1);
    }
});

client.login(process.env.TOKEN);
