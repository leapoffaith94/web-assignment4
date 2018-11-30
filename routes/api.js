// Dependencies
var express = require('express');
var router = express.Router();
// Models
var Product = require('../models/product');
// Routes
router.route('/products').post(function (req, res) {
    var p = new Product();
    p.name = req.body.name;
    p.sku = req.body.sku;
    p.price = req.body.price;
    p.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.send({ message: 'Product Created !' })
    })
});

// Return router
module.exports = router;