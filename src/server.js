const express = require('express')

// executando o express
const server = express()

//setando qual porta que a aplicação vai rodar
server.listen(5000, () => console.log('rodando'))