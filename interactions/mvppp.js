async function main(interaction) {
    interaction.reply({ content: interaction.user.username, ephemeral: true });
}

module.exports = main