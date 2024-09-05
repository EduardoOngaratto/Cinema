const express = require('express');

const app = express();

app.use(express.json());

const animais = ['cachorro', 'gatos', 'ganso'];

//criando um animal
app.post('/animais', (req, res) => {
    const { name } = req.body;
    animais.push(name);

    return res.json(animais)
})

//atualizando um animal
app.put('/animais/:index', (req,res) => {
    const { index } = req.params;
    const { name } = req.body;

    animais[index] = name;

    return res.json(animais)
})

//deletando um animal
app.delete('/animais/:index', (req,res) => {
    const { index } = req.params;

    if(index >= animais.length){
        return res.json({message: 'index não encontrado'})
    }
    
    animais.splice(index, 1);
    return res.json({message: 'animal deletado com sucesso'})
    
})

//buscando todos os animais
app.get('/animais', (req,res) => {
    
    res.json(animais)
})

//buscando animal especifico
app.get('/animais/:index', (req, res) => {
    const { index } = req.params;

    return res.json(animais[index])
})

app.listen(3000, () => {
    console.log('rodando na porta 3000')
})