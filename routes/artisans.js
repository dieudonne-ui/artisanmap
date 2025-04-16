const express = require('express');
const router = express.Router();
const {
 getAllArtisans,
 getArtisanById,
 createArtisan,
 updateArtisan,
 deleteArtisan
} = require('../controllers/artisanController');

const verifyToken = require('../middleware/auth');

// Public
router.get('/', getAllArtisans);
router.get('/:id', getArtisanById);

// Protégées
router.post('/', verifyToken, createArtisan);
router.put('/:id', verifyToken, updateArtisan);
router.delete('/:id', verifyToken, deleteArtisan);

module.exports = router;