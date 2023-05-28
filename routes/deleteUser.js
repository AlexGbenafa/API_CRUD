const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const readline = require('readline');
const connection = require('./database');

// Créer une interface readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
  
// Route DELETE pour /candidats
router.get('/candidats', (req, res) => {
  // Demande de saisie utilisateur pour l'ID
  rl.question('Veuillez saisir l\'ID de l\'utilisateur à supprimer : ', (id) => {
    // Vérifier si l'utilisateur existe avant de procéder à la suppression
    const checkQuery = 'SELECT * FROM utilisateur WHERE id = ?';
    const checkValues = [id];

    // Exécution de la requête de vérification
    connection.query(checkQuery, checkValues, (checkError, checkResults) => {
      if (checkError) {
        console.error('Error checking user:', checkError);
        res.status(500).json({ error: 'Error checking user' });
        rl.close();
        return;
      }

      if (checkResults.length === 0) {
        console.log(`User with ID ${id} not found`);
        res.status(404).json({ error: 'User not found' });
        rl.close();
        return;
      }

      // Afficher une demande de confirmation
      rl.question('Êtes-vous sûr de vouloir supprimer cet utilisateur ? (oui/non) : ', (confirmation) => {
        if (confirmation.toLowerCase() !== 'oui') {
          console.log('Suppression annulée');
          res.json({ message: 'Suppression annulée' });
          rl.close();
          return;
        }

        // Requête SQL pour supprimer l'utilisateur
        const deleteQuery = 'DELETE FROM utilisateur WHERE id = ?';
        const deleteValues = [id];

        // Exécution de la requête de suppression
        connection.query(deleteQuery, deleteValues, (deleteError, deleteResults) => {
          if (deleteError) {
            console.error('Error deleting user:', deleteError);
            res.status(500).json({ error: 'Error deleting user' });
          } else {
            console.log('User deleted successfully');
            res.json({ message: 'User deleted successfully' });
          }

          // Fermeture de l'interface readline et envoi de la réponse
          rl.close();
        });
      });
    });
  });
});
module.exports = router;