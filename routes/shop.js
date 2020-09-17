const express = require('express');

const route = express.Router();

route.get('/', (req, res) => {
    //console.log("req", req)
    res.send("<h2>Hello</h2>");
})

module.exports = route;