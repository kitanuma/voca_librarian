const { events } = require('discord.js');

//when client is on, run readyDiscord once 
module.exports ={
    name: Events.ClientReady,
    once: true,
    execute(client){
        console.log(`Ready! Logged in as ${readyClient.user.tag}`);
    },
}

