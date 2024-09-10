# Cinema API

Este é um exemplo de uma API simples criada com Express.js para gerenciar uma lista de filmes. A API oferece endpoints para criar, atualizar, deletar e buscar filmes.

## Requisitos

- Node.js
- npm (Node Package Manager) ou Yarn

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/EduardoOngaratto/Cinema.git
    ```

2. Navegue até o diretório do projeto:

   ```bash
   cd Cinema
   ```

## Uso

2. Instale as dependências:

   Se estiver usando npm:

   ```bash
   npm install
   ```
   Ou, se estiver usando yarn:

   ```bash
   yarn install
   ```
   

3. Inicie o servidor:

   Se estiver usando npm:

   ```bash
   npm start
   ```
   Ou, se estiver usando yarn:
   ```bash
   yarn start
   ```
   O servidor será iniciado na porta 3000.

## Uso

Use os seguintes endpoints para interagir com a API:

### Criar um Filme

**POST** `/filmes`

**Request Body:**

```json
{
  "name": "novo_filme"
}
````
**Response:**
```json
["O Show de Truman", "Titanic", "Rei Leão", "novo_filme"]
```

### Atualizar um animal

**PUT** `/filmes/:index`

```json
{
  "name": "filme_atualizado"
}
```

**Response:**
```json
["cachorro", "novo_filme", "ganso"]
```

### Deletar um animal
**DELETE** `/filmes/:index`

```json
{
  "message": "filme deletado com sucesso"
}
```

Se o índice(filme) não for encontrado:
```json
{
    "message": "Filme não encontrado"
}
```

### Buscar todos os animais
**GET** `/filmes`
```json
["O Show de Truman", "Um Sonho de Liberdade", "O Rei Leão"]
```

### Buscar um animal específico
**GET** `/filmes/:index`
```json
"O Show de Truman"
```

## Tecnologias
### Express.js - Framework para Node.js