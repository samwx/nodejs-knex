const express = require('express');
const router = express.Router();
const Products = require('../store/Products');

/* GET home page. */
router.get('/', function(req, res) {
  Products.listAll()
    .then(function(products) {
      res.render('index', { products });
    })
});

module.exports = router;
