const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online!`);
});

client.login("MTIwNTIzMDY2NTE4OTE2MzA3OQ.GxNVmY.5PQDBNSwgBAML1Cb3W5DTSQWhBDu-6FRdClICM"
);