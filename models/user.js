const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        trim: true,
    },
    password: {
        type: String,
        minlength: 5
    },
    lastName: {
        type: String,
    },
    role: {
        type: Number,
        default: 0
    },
    image: {
        type: String
    },
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
});

const User = mongoose.model('User', userSchema);

module.exports = {User};