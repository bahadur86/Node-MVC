const express = require('express');

const route = express.Router();

route.post('/add-product', (req, res) => {
    console.log("req", req)
})

route.get('/product', (req, res) => {
    console.log("req", req)
})

module.exports = route;
