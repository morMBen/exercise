const express = require('express')
const app = express();
// const path = require('path');
require('./db/mongoose');
const route = require('./routers/index.router');

app.use(express.json())
app.use('/api/', route);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('listening to port ' + PORT)
})
