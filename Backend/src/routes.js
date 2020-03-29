const express = require('express');
const { celebrate, Segments, Joi} = require('celebrate');

const routes = express.Router();

const ProfileController = require ('./controllers/ProfileController'); 
const OngController = require ('./controllers/Ongcontroller'); 
const Incidentcontroller = require ('./controllers/Incidentcontroller'); 
const Sessioncontroller = require ('./controllers/Sessioncontroller'); 

routes.post('/sessions', Sessioncontroller.create);
routes.post('/incidents', Incidentcontroller.create);

routes.get('/ongs', OngController.index); 
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(), 
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(16),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);   

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })

}),Incidentcontroller.index);
routes.get('/profile', celebrate({
    [Segments.HEADERS]:Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),}),ProfileController.index);
    
routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}),Incidentcontroller.delete);
module.exports= routes;
