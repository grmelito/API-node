const porta = 3803
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const database = require('./database')

app.use(bodyParser.urlencoded({extended: true}))
// METODOS GET
app.get('/estabelecimentos', (req, res, next) => {
    res.send(database.getEstabelecimentos())
})

app.get('/estabelecimentos/:id', (req, res, next) => {
    res.send(database.getEstabelecimento(req.params.id))
})

// METODO POST
app.post('/estabelecimentos', (req, res, next) => {
    const estabelecimento = database.salvarEstabelecimento({
        nome: req.body.nome,
        categoria: req.body.categoria
    })
    res.send(estabelecimento) //Converte para JSON
})

// METODO PUT
app.put('/estabelecimentos/:id', (req, res, next) => {
    const estabelecimento = database.salvarEstabelecimento({
        id: req.params.id,
        nome: req.body.nome,
        categoria: req.body.categoria
    })
    res.send(estabelecimento) //Converte para JSON
})

// METODO DELETE
app.delete('/estabelecimentos/:id', (req, res, next) => {
    const estabelecimento = database.excluirEstabelecimento(req.params.id)
    res.send(estabelecimento) //Converte para JSON   
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})