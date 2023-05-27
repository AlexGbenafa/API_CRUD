const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const readline = require('readline');


// Créer une connexion à la base de données MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'agenceimmobiliere'
  });

// Créer une interface readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
  
  // Route POST pour /candidats
  router.get('/candidats', (req, res) => {
    // Demande de saisie utilisateur
    rl.question('Veuillez saisir votre nom : ', (nom) => {
      rl.question('Veuillez saisir votre adresse e-mail : ', (mail) => {
        rl.question('Veuillez saisir votre mot de passe : ', (motDePasse) => {
          rl.question('Veuillez saisir votre numéro de téléphone : ', (numeroTelephone) => {
            rl.question('Veuillez saisir le type d\'utilisateur : ', (typeUtilisateur) => {
              // Requête SQL pour l'insertion des données
              const query = 'INSERT INTO utilisateur (nom, mail, motDePasse, numeroTelephone, typeUtilisateur) VALUES (?, ?, ?, ?, ?)';
              const values = [nom, mail, motDePasse, numeroTelephone, typeUtilisateur];
  
              // Exécution de la requête
              connection.query(query, values, (error, results) => {
                if (error) {
                  console.error('Error inserting data:', error);
                  res.status(500).json({ error: 'Error inserting data' });
                } else {
                  console.log('Data inserted successfully');
                  res.json(results);
                }
  
                // Fermeture de l'interface readline et envoi de la réponse
                rl.close();
              });
            });
          });
        });
      });
    });
  });
  
  module.exports = router;