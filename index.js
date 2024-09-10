const express = require('express');
const checkFilmes = require('./middlewares/checkFilmes');
const checkIndexFilmes = require('./middlewares/checkIndexFilmes');

const app = express();

app.use(express.json());

app.locals.filmes = ['O Show de Truman', 'Um Sonho de Liberdade', 'O Rei Leão', 'Titanic']; 

// Criar um Filme
app.post('/filmes', checkFilmes, (req, res) => {
    const { name } = req.body;
    app.locals.filmes.push(name); 

    return res.json(app.locals.filmes); 
});

// Atualizar um Filme
app.put('/filmes/:index', checkFilmes, checkIndexFilmes, (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    app.locals.filmes[index] = name; 

    return res.json(app.locals.filmes); 
});

// Deletar um Filme
app.delete('/filmes/:index', checkIndexFilmes, (req, res) => {
    const { index } = req.params;

    app.locals.filmes.splice(index, 1); 

    return res.json({ message: 'Filme deletado com sucesso' });
});

// Buscar todos os filmes
app.get('/filmes', (req, res) => {
    res.json(app.locals.filmes); 
});

// Buscar um Filme específico
app.get('/filmes/:index', checkIndexFilmes, (req, res) => {
    const { index } = req.params;

    return res.json(app.locals.filmes[index]); 
});

app.listen(3000, () => {
    console.log('Rodando na porta 3000');
});
