const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

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
        unique: true,
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
            if (!value.match(/^0\d([\d]{0,1})([-]{0,1})\d{7}$/)) {
                throw new Error('Phone number is not valid, please insert israeli number.')
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

//middleware

//function that find the email and then verifiy the password using bcrypt
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })
    if (!user) {
        throw new Error('Unable to login')
    }
    const test = await bcrypt.hash(password, 8)
    const isMatchTest = await bcrypt.compare(password, test)
    console.log(isMatchTest)
    const isMatch = await bcrypt.compare(password, user.password)
    // console.log(isMatch)
    if (!isMatch) {
        throw new Error('Unable to login2')
    }
    return user
}

userSchema.methods.generateToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, 'thisismylogin')
    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}

// hash the text password befor saving
userSchema.pre('save', async function (next) {
    const user = this
    // console.log(this)
    // console.log(this)
    user.password = await bcrypt.hash(user.password, 8)
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User;