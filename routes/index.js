var express = require('express');
var router = express.Router();
const Produto = require('../models/produto');

/* GET home page. */
router.get('/', function(req, res, next) {
  Produto.find(
    (err,docs) => {
      res.render('shop/index', {title: 'Meu e-commerce', produtos: docs});
    }
  )
});


module.exports = router;
