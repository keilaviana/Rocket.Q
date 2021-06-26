const express = require('express')

//guarda as funcionalidades de rotas
const route = express.Router()

// requisição e resposta da rota
route.get('/', (req, res) => res.render("index"))
route.get('/room', (req,res) => res.render("room"))
route.get('/create-pass', (req, res) => res.render("create-pass"))


// Formato que o formulário de dentro da modal tem que passar a informação
// route.post('/room/:room/:question/:action')

module.exports = route