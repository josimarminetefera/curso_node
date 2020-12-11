const mongoose = require('mongoose');

//IMPORTAR O MODEL DE PRODUTO 
const Produto = mongoose.model('Produto');

module.exports = {
    //teste quando entrar no link http://localhost:3001/api
    async index(req, res) {
        const produtos = await Produto.find({});
        return res.json(produtos);
    },
};