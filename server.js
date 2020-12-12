//MICROSERVIÇO QUE TOMA CONTA DE ROTAS E VIEWS
const express = require('express');

//IMPORTAR O GERENCIADOR DE BANCO
const mongoose = require('mongoose');

//BIBLIOTECA QUE GERENCIA O REQUIRE AUTOMATICAMENTE
const requiredir = require('require-dir');

//EXECUTA O EXPRESS
const app = express();

//APOS INICIAR O APP TEM QUE FALAR QUE SEJA PERMITIDO ENVIAR DADOS PARA A MINHA APLICAÇÃO NO FORMATO JSON
app.use(express.json());

//INICIANDO O BANCO DE DADOS
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });

//CONECTAR COM TODOS OS MODELS ISSO DEPENDE DO require-dir
requiredir('./src/models');

//IMPORTAR A ROTA 
//use ACEITA TODAS AS REQUISIÇÕES ASSIM A ROTA FICA http://localhost:3001/api
//TODAS REQUISIÇÕES EM http://localhost:3001/api EU MANDO PARA O MEU ARQUIVO DE ROTAS
app.use('/api', require("./src/routes"))

//FALO PARA A APLICAÇÃO OUVIR A PORTA 3001
app.listen(3001);