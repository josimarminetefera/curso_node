const mongoose = require('mongoose');

//IMPORTAR O MODEL DE PRODUTO 
const Produto = mongoose.model('Produto');

module.exports = {
    //TODOS REGISTROS DE PRODUTOS DENTRO DA NOSSA BASE DE DADOS
    //TESTE QUANDO ENTRAR NO LINK http://localhost:3001/api/produtos
    async listar(req, res) {
        const produtos = await Produto.find({});
        return res.json(produtos);
    },

    async criar(req, res) {
        //TODOS OS DADOS QUE NOS PRECISAMOS ESTÁ EM REQ.BODY
        const produto = await Produto.create(req.body);
        //RETORNAR O PRODUTO QUE ACABOU DE SER ADICIONADO NA NOSSA BASE DE DADOS
        return res.json(produto);
    },

    async visualizar(req, res) {
        //req.params É PARA PEGAR OS PARAMETROS
        const produto = await Produto.findById(req.params.id);
        return res.json(produto);
    },

    async alterar(req, res) {
        //VAI ATUALIZAR COM O QUE VEM NO CORPO DE ACORDO COM O ID DE PARAMETRO
        // { new: true } para fazer o commit e voltar o produto atualizado, exemplo se eu não usar e alterar vai retornar os dados anteriores e não os atualizados.
        //preciso buscar um unico produto pelo params e atualizando com todo o body
        const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(produto);
    },

    async deletar(req, res) {
        await Produto.findByIdAndDelete(req.params.id);
        //res.send() RESPOSTA VAZIA PARA PELO MENOS MOSTRAR ALGUMA INTERAÇÃO
        return res.send();
    }
};