var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var mongoose = require('mongoose');
var product = require('./models/product');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 3000;
//var router = express.Router();


// all other code will go here 
mongoose.connect('mongodb://localhost:27017/products');

app.use(cors());
// app.use('/api', router);

var routes = require('./routes/productRoutes'); 
routes(app);

app.listen(port);
console.log('REST API is runnning at ' + port);