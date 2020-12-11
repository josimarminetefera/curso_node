//microserviço que toma conta de rotas e views
const express = require('express');
//executa o express
const app = express();
//ROTA RAIS http://localhost:3001/
app.get('/', (req, res) => {
    //quando acessamos link do site damos f5 estamos acessando o servidor e o req tem todos detalhes desta requizição (parametros usuário autenticação body ip)
    //res é para retornar os dados
    res.send('Olá Teste');
});
//falo para a aplicação olvir a porta 3001
app.listen(3001);