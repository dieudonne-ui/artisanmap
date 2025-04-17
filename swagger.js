const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
definition: {
openapi: '3.0.0',
info: {
title: 'ArtisanMap API',
version: '1.0.0',
description: 'Documentation de l’API ArtisanMap',
},
servers: [
{
url: 'https://artisanmap.onrender.com',
},
],
components: {
securitySchemes: {
bearerAuth: {
type: 'http',
scheme: 'bearer',
bearerFormat: 'JWT',
},
},
},
},
apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app) => {
apps.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;