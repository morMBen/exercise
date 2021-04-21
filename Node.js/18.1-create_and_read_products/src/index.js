const express = require('express');
require('./db/mongoose')
const Product = require('./models/product')

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

//18.1 - 3)
app.get('/products/active', async (req, res) => {
    try {
        const temp = await Product.find()
        res.status(200).send(temp.filter(e => e.isActive === true));
        console.log(res.body)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.get('/products/:fromPrice/:toPrice', async (req, res) => {
    try {
        const temp = await Product.find()
        res.status(200).send(temp.filter(e => e.details.price >= req.params.fromPrice && e.details.price <= req.params.toPrice));
        console.log(res.body)

    } catch (e) {
        res.status(400).send(e)
    }
})

//18.1 - 2)
app.get('/products/:id', (req, res) => {
    const _id = req.params.id

    Product.findById(_id).then((product) => {
        if (!product) {
            return res.status(400).send();
        }
        res.status(200).send(product);
    }).catch((e) => {
        res.status(500).send()
    })
})

//18.1 - 1)
app.get('/products', (req, res) => {
    try {
        const results = async () => {
            const temp = await Product.find()
            res.status(200).send(temp);
            console.log(res.body)
        }
        results()
    } catch (e) {
        res.status(400).send(e)
    }
})



app.post('/products', (req, res) => {
    const product = new Product(req.body)
    product.save().then(() => {
        res.send(product)
    }).catch((err) => {
        res.status(400).send(err.message)
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
