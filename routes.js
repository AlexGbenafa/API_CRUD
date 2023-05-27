const express = require('express');
const router = express.Router();

// Route GET pour récupérer tous les éléments
router.get('/items', (req, res) => {
    // Logique pour récupérer tous les éléments
    res.send('GET - Récupérer tous les éléments');
  });
  
  // Route GET pour récupérer un élément par son ID
  router.get('/items/:id', (req, res) => {
    // Logique pour récupérer un élément par son ID
    res.send(`GET - Récupérer l'élément avec l'ID ${req.params.id}`);
  });
  
  // Route POST pour créer un nouvel élément
  router.post('/items', (req, res) => {
    // Logique pour créer un nouvel élément
    res.send('POST - Créer un nouvel élément');
  });
  
  // Route PUT pour mettre à jour un élément par son ID
  router.put('/items/:id', (req, res) => {
    // Logique pour mettre à jour un élément par son ID
    res.send(`PUT - Mettre à jour l'élément avec l'ID ${req.params.id}`);
  });
  
  // Route DELETE pour supprimer un élément par son ID
  router.delete('/items/:id', (req, res) => {
    // Logique pour supprimer un élément par son ID
    res.send(`DELETE - Supprimer l'élément avec l'ID ${req.params.id}`);
  });
  
  module.exports = router;
  