const mongoose = require('mongoose');

//IMPORTAR O MODEL DE PRODUTO 
const Produto = mongoose.model('Produto');

module.exports = {
    //todos registros de produtos dentro da nossa base de dados
    //teste quando entrar no link http://localhost:3001/api/produtos
    async listar(req, res) {
        const produtos = await Produto.find({});
        return res.json(produtos);
    },

    async criar (req, res){
        const produto = await Produto.create(req.body);
        return res.json(produto);
    },
};