// middlewares/checkIndexAnimais.js

const filmes = ['O Show de Truman', 'Um Sonho de Liberdade', 'O Rei Leão', 'Titanic'];

function checkIndexAnimais(req, res, next) {
    const filme = filmes[req.params.index];

    if (!filme) {
        return res.status(404).json({ error: "O Filme não existe" });
    }

    return next();
}

module.exports = checkIndexAnimais;
