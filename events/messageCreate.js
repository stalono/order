const { createUser, getUser, updateUser, getAllUsers, getAllUsersByGuild, decimalToString, deleteUser } = require('../mongoose.js');

module.exports = {
	name: 'messageCreate',
	execute(message) {
        console.log()
        createUser(message.author.id, message.guild.id);
    }
}