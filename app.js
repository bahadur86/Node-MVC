const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

const adminRoute = require('./routes/admin')
const shopRoute = require('./routes/shop')

// Parsing the incoming form request
app.use(bodyParser.urlencoded({ extended: false }))

//res.sendFile(path.join(__dirname, '../', 'view', 'add-product.html'))

//Add public file in html view like (<link rel="stylesheet" href="css/style.css" /> )
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoute);
app.use(shopRoute);

app.use((req, res, next) => {
    res.status('404').send("<h3>Page not found</h3>");
})

app.listen(3001)