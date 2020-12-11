const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    data: {
        type: Date,
        default: Date.now,//DATA ATUAL QUE O REGISTRO FOI CRIADO 
    }
});

//REGISTRAR O MODEL NA APLICAÇÃO COM A BASE DE DADOS
//TODA A APLICAÇÃO VAI SABER QUE EXISTE UM MODEL PRODUTO QUE POSSUI ESTAS PROPRIEDADES AQUI 
mongoose.model('Produto', ProdutoSchema);