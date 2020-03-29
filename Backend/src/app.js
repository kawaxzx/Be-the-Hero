const express = require('express');
const routes = require ('./routes')
const app = express();
const cors= require('cors'); 
const{errors}=require('celebrate') ;

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errors());


module.exports = app;
/**
 * Rota / Recurso
 */

/**
  *Métodos HTTP
  *
  * GET: Buscar uma informacao do back-end
  * POST : Criar uma informação no back-end
  * PUT: Alterar uma informacao no back-end
  * DELETE: deletar uma informação no back-end
  */

/**
 * TIPOS DE PARAMETROS
 * 
 * Query Parms: Parametros nomeados enviados na rota apos o "?" (Filtros, paginacao)
 * Route Parms : Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição utilizado para criar e alterar recursos
 */

 /**
  * SQL : MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 * 
 */


