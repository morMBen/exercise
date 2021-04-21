const mongoose = require('mongoose');
const validator = require('validator');

const Product = mongoose.model('Product', {
    name: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    details: {
        description: {
            type: String,
            required: true,
            validate(value) {
                if (value.length < 10) {
                    throw new Error('The description must be at least 10 letters!')
                }
            }
        },
        price: {
            type: Number,
            required: true,
            validate(value) {
                if (value < 0) {
                    throw new Error('The price must be a positive value!')
                }
            }
        },
        discount: {
            type: Number,
            default: 0
        },
        images: {
            type: [String],
            validate(value) {
                if (value.length < 2) {
                    throw new Error('You must enter at least two images!')
                }
            }
        },
        phone: {
            type: String,
            required: true,
            validate(value) {
                if (!validator.isMobilePhone(value, 'he-IL')) {
                    throw new Error('It is not valid israeli number!')
                }
            }
        }
    }
})


module.exports = Product;
