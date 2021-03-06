const mongoose = require('mongoose');
const Produto = require('../models/produto');

mongoose.connect('localhost:27017/shopping');

let produtos = [
    new Produto({
        imagemPath: '/images/1.jpg',
        titulo: 'Minha foto',
        descricao: "Minha foto de batismo para venda",
        preco: 25
    }),
     new Produto({
        imagemPath: '/images/3.jpg',
        titulo: 'Mortal Kombat 6',
        descricao: "Sônia quer vingança e vai bater em todos que encontrar no caminho",
        preco: 32.66
    }),
     new Produto({
        imagemPath: '/images/4.jpg',
        titulo: 'Minha foto',
        descricao: "Minha foto de batismo para venda",
        preco: 10
    }),
     new Produto({
        imagemPath: '/images/2.jpg',
        titulo: 'Minha foto',
        descricao: "Minha foto de batismo para venda",
        preco: 30.00
    }),
    new Produto({
        imagemPath: '/images/1.jpg',
        titulo: 'Minha foto',
        descricao: "Minha foto de batismo para venda",
        preco: 25.00
    }),
     new Produto({
        imagemPath: '/images/3.jpg',
        titulo: 'Minha foto',
        descricao: "Minha foto de batismo para venda",
        preco: 12
    }),
     new Produto({
        imagemPath: '/images/4.jpg',
        titulo: 'Minha foto',
        descricao: "Minha foto de batismo para venda",
        preco: 10
    }),
     new Produto({
        imagemPath: '/images/2.jpg',
        titulo: 'Minha foto',
        descricao: "Minha foto de batismo para venda",
        preco: 30
    })
];

let counter = 0;

for (let i =0; i < produtos.length; i++){
    produtos[i].save().then(
        function(err,result){
            counter++;
            if (err){console.log(err)}
            console.log(result)
            if (counter === produtos.length){
                mongoose.disconnect();
            }
        }
    )
}
