// middlewares/checkFilmes.js

function checkFilmes(req, res, next) {
    if (!req.body.name) {
        return res.status(404).json({ error: "Nome do Filme é obrigatório!" });
    }

    return next();
}

module.exports = checkFilmes;
