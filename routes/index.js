const express = require('express');
const router = express.Router();
const Products = require('../store/Products');

/* GET home page. */
router.get('/', function(req, res, next) {
  Products.listAll()
    .then(products => {
      res.render('index', { products });
    })
});

module.exports = router;
