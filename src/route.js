const express = require('express')
const QuestionController = require('./controllers/QuestionController')

//guarda as funcionalidades de rotas
const route = express.Router()

// requisição e resposta da rota
route.get('/room', (req,res) => res.render("room"))
route.get('/', (req, res) => res.render("index", {page: 'enter-room'} ))
route.get('/create-pass', (req, res) => res.render("index", {page: "create-pass"}))



// Formato que o formulário de dentro da modal tem que passar a informação
route.post('/room/:room/:question/:action', QuestionController.index )

module.exports = route