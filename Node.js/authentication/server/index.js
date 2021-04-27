const express = require('express')
const app = express();
const cors = require('cors');
// const path = require('path');
require('./db/mongoose');
const route = require('./routers/index.router');

//declering a middleware function
// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.status(400).send('Get requests are disabled')
//     } else {
//         // next()
//     }
//     console.log(req.method, req.path)
// })

//maintenance middeleware test
// app.use((req, res, next) => {
//     res.send('The site is currently under maintenance')
// })

app.use(express.json())
app.use(cors())
app.use('/api/', route);

//
// Without middleware: new request -> run route handler
//
// With middleware: new request -> do something -> run route handler
//

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log('listening to port ' + PORT)
})




//call token maker
const jwt = require('jsonwebtoken')



const myFunk = async () => {
    //create new token
    const token = jwt.sign({ _id: "motimoti" }, 'thisismyrendom', { expiresIn: '7 days' })
    //return
    //header - base 56
    //body - contain the data we provaided
    //tail - signiture
    //test
    // console.log(token)

    //varify token
    const data = jwt.verify(token, 'thisismyrendom')
    //test
    // console.log(data)
}



myFunk()