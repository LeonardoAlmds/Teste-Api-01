const express = require('express');
const routes = express.Router();

var db = [
    {id: 15, Nome:'Pedro', Email:'pedro@teste.com'},
    {id: 24, Nome:'Leonardo', Email:'leonardo@teste.com'},
    {id: 37, Nome:'José', Email:'jose@teste.com'},
    {37: {Nome:'José', Email:'jose@teste.com'}}
]

// Buscar Dados

routes.get('/', (req, res) => {
    return res.json(db)
});

// Inserir Dados
routes.post('/add', (req, res) => {
    const body = req.body

    if(!body)
        return res.status(400).end()

    db.push(body)
    return res.json(body)
});

// routes.delete("/:id", (req:, res) => {
//     const { id } = req.params

//     let newDB = db.filter(item => {
//         if(!item[id])
//             return item
//     });

//     db = newDB;
//     return res.send(newDB)
// });

routes.delete('/:id', (req, res) => {
    res.json({
        mensagem: `Livro ${req.params.id} removido.`
    });
    res.status(204).send();
});

module.exports = routes