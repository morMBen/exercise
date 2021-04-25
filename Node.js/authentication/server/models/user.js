const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    first: {
        type: String,
        required: true,
        trim: true
    },
    last: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        minlength: 9,
        trim: true,
        validate(value) {
            if (!value.matches('/^0\d([\d]{0,1})([-]{0,1})\d{7}$/')) {
                throw new Error('Phone number is not valid, please insert israeli number.')
            }
        }
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User;