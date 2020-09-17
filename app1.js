//const http = require('http');
const express = require('express')
const bodyParser = require('body-parser')
const app = express();

// Parsing the incoming form request
app.use(bodyParser.urlencoded({ extent: false }))

//use GET or POST method

app.post('/add-product', (req, res) => {
    console.log("req", req)
})

app.get('/product', (req, res) => {
    console.log("req", req)
})

// const server = http.createServer(app)

// server.listen("3001");

app.listen(3001)