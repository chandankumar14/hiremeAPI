const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
Router = require('./Router/route');
let port = process.env.PORT;
let host = process.env.Host;
let DB_CONNECTION = process.env.DB_CONNECTION;
const app = express();
app.use(bodyParser.json()); // apply body parser to parsee the in josn 

// apply cors pronblem------>   

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
// nevigating every request on route folder
app.use('/', Router);


// here making connection to database---->
mongoose.connect(DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true })

    .then(
        app.listen(port, host, () => {
            console.log(`Server running at http://${host}:${port}/`);
        })
    )
    .catch(
        err => {
            console.log(err)
        }
    )