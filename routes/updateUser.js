const express = require('express');
const router = express.Router();
const readline = require('readline');
const connection = require('./database');


// Créer une interface readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Route PUT pour /candidats/:id
router.get('/candidats', (req, res) => {
  // Demande de saisie utilisateur pour l'ID
  rl.question('Veuillez saisir l\'ID de l\'utilisateur à mettre à jour : ', (userId) => {
    // Vérifier si l'utilisateur existe avant de procéder à la mise à jour
    const checkQuery = 'SELECT * FROM utilisateur WHERE id = ?';
    const checkValues = [userId];

    // Exécution de la requête de vérification
    connection.query(checkQuery, checkValues, (checkError, checkResults) => {
      if (checkError) {
        console.error('Error checking user:', checkError);
        res.status(500).json({ error: 'Error checking user' });
        rl.close();
        return;
      }

      if (checkResults.length === 0) {
        console.log(`User with ID ${userId} not found`);
        res.status(404).json({ error: 'User not found' });
        rl.close();
        return;
      }

      // Demande de saisie utilisateur pour les nouvelles données
      rl.question('Veuillez saisir le nouveau nom : ', (nom) => {
        rl.question('Veuillez saisir la nouvelle adresse e-mail : ', (mail) => {
          rl.question('Veuillez saisir le nouveau mot de passe : ', (motDePasse) => {
            rl.question('Veuillez saisir le nouveau numéro de téléphone : ', (numeroTelephone) => {
              rl.question('Veuillez saisir le nouveau type d\'utilisateur : ', (typeUtilisateur) => {
                // Requête SQL pour mettre à jour les données de l'utilisateur
                const updateQuery = 'UPDATE utilisateur SET nom = ?, mail = ?, motDePasse = ?, numeroTelephone = ?, typeUtilisateur = ? WHERE id = ?';
                const updateValues = [nom, mail, motDePasse, numeroTelephone, typeUtilisateur, userId];

                // Exécution de la requête de mise à jour
                connection.query(updateQuery, updateValues, (updateError, updateResults) => {
                  if (updateError) {
                    console.error('Error updating user:', updateError);
                    res.status(500).json({ error: 'Error updating user' });
                  } else {
                    console.log('User updated successfully');
                    res.json({ message: 'User updated successfully' });
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
  });
});

module.exports = router;
