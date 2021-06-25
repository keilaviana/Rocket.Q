const express = require('express')
const route = require('./route')
const path = require('path')

// executando o express
const server = express()

// especificando quem é responsável pela view engine é o módulo ejs
server.set('view engine', 'ejs')

//usar os arquivos estáticos
server.use(express.static("public"))

// o path pega o caminho da pasta que está o projeto 
server.set('views', path.join(__dirname, 'views'))

server.use(route)

//setando qual porta que a aplicação vai rodar
server.listen(5000, () => console.log('rodando'))