const express = require('express');

const routes = express.Router();

const ProfileController = require ('./controllers/ProfileController'); 
const OngController = require ('./controllers/Ongcontroller'); 
const Incidentcontroller = require ('./controllers/Incidentcontroller'); 
const Sessioncontroller = require ('./controllers/Sessioncontroller'); 

routes.post('/sessions', Sessioncontroller.create);

routes.get('/ongs', OngController.index); 
routes.post('/ongs', OngController.create);   

routes.get('/incidents', Incidentcontroller.index);
routes.post('/incidents', Incidentcontroller.create);
routes.delete('/incidents/:id', Incidentcontroller.delete);

routes.get('/profile', ProfileController.index);

module.exports= routes;
