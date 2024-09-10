// middlewares/checkIndexFilmes.js

function checkIndexFilmes(req, res, next) {
    const { index } = req.params;  
    const filme = req.app.locals.filmes[index]; 

    if (!filme) {
        return res.status(404).json({ error: "O Filme não existe" });
    }

    return next();
}

module.exports = checkIndexFilmes;
