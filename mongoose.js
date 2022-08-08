const { userSchema } = require('./user-schema.js');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Stalono:410636@cluster0.7h54w.mongodb.net/zakazbot?retryWrites=true&w=majority");

function toModel(name, schema) {
	return mongoose.model(name, schema);
}

async function insertNew(model, data, collection) {
	const newModel = new model(data, collection);
	return await newModel.save();
}

async function createUser(id, guild) {
	const userModel = toModel('user', userSchema);
	const userData = await userModel.findOne({ id: id, guildId: guild });
	if (userData) {
		return userData;
	} else {
		return await insertNew(userModel, { id: id, guildId: guild }, 'users');
	}
}

async function getUser(id, guild) {
	return await createUser(id, guild);
}

async function updateUser(id, guild, data) {
	await createUser(id, guild);
	const userModel = toModel('user', userSchema);
	return userModel.findOneAndUpdate({ id: id, guildId: guild }, data);
}

async function getAllUsers() {
    await createUser(id, guild);
	const userModel = toModel('user', userSchema);
	return userModel.find({});
}

async function getAllUsersByGuild(guild) {
    await createUser(id, guild);
	const userModel = toModel('user', userSchema);
	return userModel.find({ guildId: guild });
}

async function deleteUser(id, guild) {
    await createUser(id, guild);
	const userModel = toModel('user', userSchema);
	return userModel.deleteOne({ id: id, guildId: guild });
}

function decimalToString(id) {
	return id.toString();
}

module.exports = { createUser, getUser, updateUser, getAllUsers, getAllUsersByGuild, decimalToString, deleteUser };