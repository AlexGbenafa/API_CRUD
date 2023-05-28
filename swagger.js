const expressSwagger = require('express-swagger-generator');
const express = require('express');
const app = express();
const apiRoutes = require('./routes');
const mysql = require('mysql');
const config = require('./config/db');

let options = {
  swaggerDefinition: {
    info: {
      description: 'API CRUD Documentation',
      title: 'API CRUD',
      version: '1.0.0',
    },
    host: 'localhost:2000', // Mettez le bon host et le port de votre API
    basePath: '/',
    produces: ['application/json'],
    schemes: ['http'],
  },
  basedir: __dirname, // Mettez le bon chemin d'accès à votre fichier principal
  files: ['./routes/create.js', './routes/table.js', './routes/updateUser.js', './routes/deleteUser.js'], // Mettez le chemin d'accès à vos fichiers de route
};

expressSwagger(app)(options);

app.listen(2000, () => {
  console.log('Server is running on port 2000');
});
