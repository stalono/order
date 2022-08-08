const { mongoose } = require('mongoose');

const userSchema = new mongoose.Schema({
    id: mongoose.Types.Decimal128,
    tag: {
        type: String,
        default: '',
    },
    balance: {
        type: Number,
        default: 0,
    },
    xp: {
        type: Number,
        default: 0,
    },
    lvl: {
        type: Number,
        default: 1,
    },
    warns: {
        type: Number,
        default: 0,
    },
    guildName: {
        type: String,
        default: '',
    },
    guildId: {
        type: String,
        default: '',
    }
});

module.exports = { userSchema };