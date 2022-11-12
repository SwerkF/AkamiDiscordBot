const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Que peut-il bien se passer 🧐 ?'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};
