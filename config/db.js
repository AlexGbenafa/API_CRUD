require('dotenv').config();
const mysql = require('mysql');

const config = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "agenceimmobiliere"
};

// Créez une connexion à la base de données MySQL
const connection = mysql.createConnection(config);

// Connectez-vous à la base de données MySQL
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to database:', error);
  } else {
    console.log('Connected to database');
  }
});

module.exports = connection;
