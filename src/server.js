const express = require('express')
const route = require('./route')

// executando o express
const server = express()

server.use(route)

//setando qual porta que a aplicação vai rodar
server.listen(5000, () => console.log('rodando'))