const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageButton, MessageActionRow } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Посмотреть ник юзера')
        .addUserOption(option => 
            option.setName('пользователь')
                .setDescription('Ник юзера')
                .setRequired(true))
		.setDefaultMemberPermissions(8),
	async execute(interaction) {
        const user = interaction.options.getUser('пользователь');
        const specialBtn = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('Test')
            .setCustomId("ss")
        const row = new MessageActionRow().addComponents(specialBtn);
        interaction.reply({ content: `Ник юзера: ${user}`, components: [row], ephemeral: true }).catch(error => {console.log(error)});
	},
};