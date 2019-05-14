const express = require('express');
const router = express.Router();
const Products = require('../store/Products');

/* GET home page. */
router.get('/', function(_, res) {
  Products.get()
    .then(function(products) {      
      res.render('index', { products });
    })
});

module.exports = router;
