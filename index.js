const express = require('express');
const checkfilmes = require('./middlewares/checkfilmes');
const checkIndexfilmes = require('./middlewares/checkIndexfilmes');

const app = express();

app.use(express.json());

const filmes = ['O Show de Truman', 'Um Sonho de Liberdade', 'O Rei Leão', 'Titanic'];

// Criar um Filme
app.post('/filmes', checkfilmes, (req, res) => {
    const { name } = req.body;
    filmes.push(name);

    return res.json(filmes);
});

// Atualizar um Filme
app.put('/filmes/:index', checkfilmes, checkIndexfilmes, (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    filmes[index] = name;

    return res.json(filmes);
});

// Deletar um Filme
app.delete('/filmes/:index', checkIndexfilmes, (req, res) => {
    const { index } = req.params;

    filmes.splice(index, 1);
    return res.json({ message: 'Filme deletado com sucesso' });
});

// Buscar todos os filmes
app.get('/filmes', (req, res) => {
    res.json(filmes);
});

// Buscar um Filme específico
app.get('/filmes/:index', checkIndexfilmes, (req, res) => {
    const { index } = req.params;

    return res.json(filmes[index]);
});

app.listen(3000, () => {
    console.log('rodando na porta 3000');
});
