const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Статус бота')
		.setDefaultMemberPermissions(8),
	async execute(interaction) {
		const pingEmbed = new MessageEmbed()
			.setTitle(`${interaction.client.ws.ping} ms`)
			.setColor('GREEN')
			.setTimestamp()
			.setFooter({ text: 'Пинг | Аска' });
		await interaction.reply({ embeds: [pingEmbed], ephemeral: true }).catch(error => {console.log(error)});
	},
};