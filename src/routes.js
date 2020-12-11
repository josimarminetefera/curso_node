const express = require("Express");
const rotas = express.Router();

const ProdutoController = require("./controllers/ProdutoController");

//CRIANDO ROTA RAIZ DO PROJETO
rotas.get('/produtos', ProdutoController.index);

//EXPORTA AS ROTAS PARA SER USADO FORA DESTE ARQUIVO
module.exports = rotas;



//VERIFICANDO SE JÁ DA PARA SALVAR ALGUMA INFORMAÇÃO NO BANCO DE DADOS
// const Produto = mongoose.model('Produto');

//ROTA RAIS http://localhost:3001/
// rotas.get('/', (req, res) => {
//     //QUANDO ACESSAMOS LINK DO SITE DAMOS F5 ESTAMOS ACESSANDO O SERVIDOR E O REQ TEM TODOS DETALHES DESTA REQUIZIÇÃO (PARAMETROS USUÁRIO AUTENTICAÇÃO BODY IP)
//     //RES É PARA RETORNAR OS DADOS
//     res.send('Olá Josimar ');
// });

//CASO VOCE ACESSE http://localhost:3001/ ELE VAI CRIAR ESTE PRODUTO 
// rotas.get("/", (req, res) => {
//     Produto.create({
//         titulo: "Celular Doido",
//         descricao: "Celular do Baoum",
//         url: "https://st.depositphotos.com"
//     });
//     return res.send('Olá Josimar ');
// });
