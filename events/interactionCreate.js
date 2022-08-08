const fs = require('fs');

module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		if (!interaction.isCommand() && !interaction.isMessageContextMenu() && !interaction.isButton()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		const interactionPath = `${require('process').cwd()}/interactions/${interaction.customId}.js`;
		if (fs.existsSync(interactionPath)) {
			const execute = require(interactionPath);
			try {
				execute(interaction);
			} catch (error) {
				console.log(error);
			}
		}

		if (!command) return;

		try {
			command.execute(interaction);
		}
		catch (error) {
			console.error(error);
			interaction.reply({ content: '**При запуске команды произошла ошибка!**', ephemeral: true });
		}

		if (command.permission) {
			const authorPerms = interaction.channel.permissionsFor(interaction.member);
			if (!authorPerms || !authorPerms.has(command.permission)) {
        		interaction.reply({content: '**У вас недостаточно прав**', ephemeral: true }).catch(error => {console.log(error)});
			}
		}
	},
};