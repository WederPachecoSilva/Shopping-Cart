const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    imagemPath: {type: String, required: true},
    titulo: {type: String, required: true},
    descricao: {type: String, required: true},
    preco: {type: Number, required: true}
});

module.exports = mongoose.model("Produto", schema);