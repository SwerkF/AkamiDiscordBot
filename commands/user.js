const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Retourne les informations à propos de l\'utilisateur 😃.')
        .addUserOption(option =>
			option
				.setName('user')
				.setDescription('L\'utilisateur duquel vous voulez obtenir les infos.')
				.setRequired(true)
            ),
        
	async execute(interaction) {
        let member = interaction.options.getMember('user');
        member = interaction.guild.members.cache.get(member.user.id)

         console.log()
        
        const exampleEmbed = new EmbedBuilder()
            .setTitle(`Information sur ${interaction.user.username}`)
            .setDescription("Voici quelques informations sur l'utilisateur mentionné.")
            .setThumbnail(`${member.user.displayAvatarURL()}`)
            .addFields(
                { name: 'Created at:', value: `${interaction.user.createdAt}` },
                { name: '\u200B', value: '\u200B' },
                { name: 'Inline field title', value: 'Some value here', inline: true },
                { name: 'Inline field title', value: 'Some value here', inline: true },
            )
            .setTimestamp()
            .setFooter({ text: `Commande executé par : ${interaction.user.username}`});

		await interaction.reply({ embeds: [exampleEmbed]});
	},
};
