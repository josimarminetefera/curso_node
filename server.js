//MICROSERVIÇO QUE TOMA CONTA DE ROTAS E VIEWS
const express = require('express');

//IMPORTAR O GERENCIADOR DE BANCO
const mongoose = require('mongoose');

//BIBLIOTECA QUE GERENCIA O REQUIRE AUTOMATICAMENTE
const requiredir = require('require-dir');

//EXECUTA O EXPRESS
const app = express();

//ROTA RAIS http://localhost:3001/
// app.get('/', (req, res) => {
//     //QUANDO ACESSAMOS LINK DO SITE DAMOS F5 ESTAMOS ACESSANDO O SERVIDOR E O REQ TEM TODOS DETALHES DESTA REQUIZIÇÃO (PARAMETROS USUÁRIO AUTENTICAÇÃO BODY IP)
//     //RES É PARA RETORNAR OS DADOS
//     res.send('Olá Josimar ');
// });

//INICIANDO O BANCO DE DADOS
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });

//CONECTAR COM TODOS OS MODELS ISSO DEPENDE DO require-dir
requiredir('./src/models');

//VERIFICANDO SE JÁ DA PARA SALVAR ALGUMA INFORMAÇÃO NO BANCO DE DADOS
const Produto = mongoose.model('Produto');

//CASO VOCE ACESSE http://localhost:3001/ ELE VAI CRIAR ESTE PRODUTO 
// app.get("/", (req, res) => {
//     Produto.create({
//         titulo: "Celular Doido",
//         descricao: "Celular do Baoum",
//         url: "https://st.depositphotos.com"
//     });
//     return res.send('Olá Josimar ');
// });

//FALO PARA A APLICAÇÃO OUVIR A PORTA 3001
app.listen(3001);