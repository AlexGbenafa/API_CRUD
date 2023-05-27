const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// Créer une connexion à la base de données MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'agenceimmobiliere'
});

//Envoyer les infos dans la base de donnee
//REVOIR LES METHODES GET ET POST
router.get('/candidats', (req, res) => {
    const query = '';

    connection.query(query, (error, results) => {
        if (error) {
          console.error('Error fetching candidates:', error);
          res.status(500).json({ error: 'Error fetching candidates' });
        } else {
          console.log('Candidate created successfully');
          res.status(201).json({ message: 'Candidate deleted successfully' });
          res.json(results);
        }
      });
});