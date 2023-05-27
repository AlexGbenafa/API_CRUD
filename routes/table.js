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

// Récupérer tous les candidats
router.get('/candidats', (req, res) => {
  const query = 'SELECT * FROM proprietes';

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching candidates:', error);
      res.status(500).json({ error: 'Error fetching candidates' });
    } else {
      console.log(results);
      res.json(results);
    }
  });
});


module.exports = router;

