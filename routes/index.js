var express = require('express');
var router = express.Router();
const Produto = require('../models/produto');

/* GET home page. */
router.get('/', function(req, res, next) {
  //Produto.find() irá retornar um array de objetos
  Produto.find(
    (err,docs) => {
      // Separa os produtos recebidos em chunks(pedaços) para renderizar nas rows e colunms corretamente
      // productChunks será um array de arrays com três elementos cada. Ex: [[doc1,doc2,doc3], [doc4,doc5, doc6],...] 
      let productChunks = [];
      let chunkSize = 3;
      for (let i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
      }
      console.log(productChunks);
      res.render('shop/index', {title: 'Meu e-commerce', produtos: productChunks});
    }
  )
});


module.exports = router;
