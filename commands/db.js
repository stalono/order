const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('db')
		.setDescription('db')
		.setDefaultMemberPermissions(8),
	async execute(interaction) {
        let donate1 = new MessageButton()
        .setStyle(`SECONDARY`)
        .setLabel('VIP')
        .setCustomId(`vip`)
      let donate2 = new MessageButton()
        .setStyle(`SECONDARY`)
        .setLabel('VIP+')
        .setCustomId(`vipp`)
      let donate3 = new MessageButton()
        .setStyle(`SECONDARY`)
        .setLabel('MVP')
        .setCustomId(`mvp`)
      let donate4 = new MessageButton()
        .setStyle(`SECONDARY`)
        .setLabel('MVP+')
        .setCustomId(`mvpp`)
      let donate5 = new MessageButton()
        .setStyle(`SECONDARY`)
        .setLabel('MVP++')
        .setCustomId(`mvppp`)

    await interaction.reply({ components: [new MessageActionRow().addComponents(donate1, donate2, donate3, donate4, donate5)] })
	},
};