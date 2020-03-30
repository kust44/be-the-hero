const routes = require('./routes');
const cors = require('cors');
const express = require('express');
const { errors } = require('celebrate');

const app = express();

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * Opções para utilização de um SGBD:
 * Driver: instala o pacote oficial de determinado SGBD e utiliza a sua linguagem -> SELECT * FROM users
 * Query Builder: utiliza Javascript para manipular o SGBD -> table('users').select('*').where()
 */

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;