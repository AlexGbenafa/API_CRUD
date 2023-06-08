const express = require('express');
const app = express();
const apiRoutes = require('./routes');
const mysql = require('mysql');
const config = require('./config/db');

// Use the apiRoutes as middleware for '/api' routes
app.use('/api', apiRoutes);

// The rest of your configuration and application logic

// Start the server
app.listen(2000, () => {
  console.log('Server is running on port 2000');
});

// Create a connection to the MySQL database
const connection = mysql.createConnection(config);

// Handle database connection errors
connection.on('error', (error) => {
  console.error('Database connection error:', error);
});

//Lire les donnees depuis la base de donnee
const tableRoutes = require('./routes/table');
// Utilisez le routeur pour les routes commençant par "/api"
app.use('/api', tableRoutes);

const create = require('./routes/create')
//Methode create pour inserer des donnees dans la base
app.use('/api', create)

const deleteUser = require('./routes/deleteUser')
//Methode delete pour supprimer des donnees dans la base
app.use('/api', deleteUser)

const updateUser = require('./routes/updateUser')
//Methode delete pour mettre a jour des donnees dans la base
app.use('/api', updateUser) 