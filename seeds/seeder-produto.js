const mongoose = require('mongoose');
const Produto = require('../models/produto');

mongoose.connect('localhost:27017/shopping');

let produtos = [
    new Produto({
        imagemPath: '../public/images/1.jpg',
        title: 'Minha foto',
        description: "Minha foto de batismo para venda",
        preco: 25
    }),
    new Produto({
        imagemPath: '../public/images/2.jpg',
        title: 'Minha foto',
        description: "Minha foto de batismo para venda",
        preco: 25
    }),
    new Produto({
        imagemPath: '../public/images/3.jpg',
        title: 'Minha foto',
        description: "Minha foto de batismo para venda",
        preco: 25
    }),
    new Produto({
        imagemPath: '../public/images/1.jpg',
        title: 'Minha foto',
        description: "Minha foto de batismo para venda",
        preco: 25
    }),
];

let counter = 0;

for (let i =0; i < produtos.length; i++){
    produtos[i].save().then(
        (err,result) => {
            counter++;
            if (counter === produtos.length){
                mongoose.disconnect();
            }
        }
    )
}