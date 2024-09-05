# Animal API

Este é um exemplo de uma API simples criada com Express.js para gerenciar uma lista de animais. A API oferece endpoints para criar, atualizar, deletar e buscar animais.

## Requisitos

- Node.js
- npm (Node Package Manager) ou Yarn

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/EduardoOngaratto/Zoologico.git
    ```

2. Navegue até o diretório do projeto:

   ```bash
   cd Zoologico
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

### Criar um animal

**POST** `/animais`

**Request Body:**

```json
{
  "name": "novo_animal"
}
````
**Response:**
```json
["cachorro", "gatos", "ganso", "novo_animal"]
```

### Atualizar um animal

**PUT** `/animais/index`

```json
{
  "name": "animal_atualizado"
}
```

**Response:**
```json
["cachorro", "novo_animal", "ganso"]
```

### Deletar um animal
**DELETE** `/animais/:index`

```json
{
  "message": "animal deletado com sucesso"
}
```

Se o índice(animal) não for encontrado:
```json
{
    "message": "index não encontrado"
}
```

### Buscar todos os animais
**GET** `/animais`
```json
["cachorro", "gatos", "ganso"]
```

### Buscar um animal específico
**GET** `/animais/:index`
```json
"cachorro";
```

## Tecnologias
### Express.js - Framework para Node.js