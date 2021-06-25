const express = require('express')

//guarda as funcionalidades de rotas
const route = express.Router()

// requisição e resposta da rota
route.get('/', (req, res) => res.render("index"))

module.exports = route