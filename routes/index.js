const express = require('express');
const router = express.Router();

// Importer les routes
const tableRoutes = require('./table');

// Définir les routes
router.use('/', tableRoutes);

module.exports = router;
