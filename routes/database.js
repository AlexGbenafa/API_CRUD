const mysql = require('mysql');

// Créer une connexion à la base de données MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'agenceimmobiliere'
});

// Établir la connexion à la base de données
connection.connect((error) => {
    if (error) {
        console.error('Database connection error:', error);
    } else {
        console.log('Connected to the database');
    }
});

module.exports = connection;
