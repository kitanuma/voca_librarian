const { SlashCommandBuilder } = require("discord.js");

//export definition and execution so they can be read by other files
//used for require() in other files
module.exports = {
    data: new SlashCommandBuilder()
    .setName('search')
    .setDescription("Search for song"),

    async execute(interaction) {
        await interaction.reply("Searcher is up.");
    }
}

