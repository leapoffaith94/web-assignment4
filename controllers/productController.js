var mongoose = require('mongoose'),
Product = mongoose.model('Product');

exports.list_all_products = function(req, res) {
    Product.find({}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.create_a_product = function(req, res) {
  var new_product = new Product(req.body);
  new_product.save(function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.read_a_product = function(req, res) {
    Product.findById(req.params.product_id, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.update_a_product = function(req, res) {
    Product.findOneAndUpdate({_id: req.params.product_id}, req.body, {new: true}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.delete_a_product = function(req, res) {
    Product.remove({
    _id: req.params.product_id
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Product successfully deleted' });
  });
};