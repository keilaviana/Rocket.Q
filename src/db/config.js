const sqlite3 = require("sqlite3")
const { open } = require("sqlite") // trás apenas o open ao inves de trazer tudo que tem dentro do sqlite

module.exports = () => 
    open({
        filename: './src/db/rocketq.sqlite',
        driver: sqlite3.Database,
    })
