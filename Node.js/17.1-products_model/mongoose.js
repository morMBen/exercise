const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/products', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

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
        desciption: {
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

const newProduct = new Product({
    name: 'yoyo2',
    category: 'games',
    details: {
        desciption: 'as well wonderful game',
        price: 20,
        images: ['imageOne', 2],
        phone: '0545553008'
    }
})

newProduct.save().then(() => {
    console.log(newProduct)
}).catch((err) => {
    console.log(err)
})