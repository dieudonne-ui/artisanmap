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

/**
 * @swagger
 * tags:
 *   name: Artisans
 *   description: Gestion des artisans
 */

/**
 * @swagger
 * /api/artisans:
 *   get:
 *     summary: Récupère tous les artisans
 *     tags: [Artisans]
 *     responses:
 *       200:
 *         description: Liste des artisans
 */
router.get('/', getAllArtisans);

/**
 * @swagger
 * /api/artisans/{id}:
 *   get:
 *     summary: Récupère un artisan par ID
 *     tags: [Artisans]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'artisan
 *     responses:
 *       200:
 *         description: Artisan trouvé
 *       404:
 *         description: Artisan non trouvé
 */
router.get('/:id', getArtisanById);

/**
 * @swagger
 * /api/artisans:
 *   post:
 *     summary: Crée un nouvel artisan
 *     tags: [Artisans]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               specialty:
 *                 type: string
 *               description:
 *                 type: string
 *               ville:
 *                 type: string
 *               telephone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Artisan créé
 *       401:
 *         description: Non autorisé
 */
router.post('/', verifyToken, createArtisan);

/**
 * @swagger
 * /api/artisans/{id}:
 *   put:
 *     summary: Met à jour un artisan
 *     tags: [Artisans]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               métier:
 *                 type: string
 *               ville:
 *                 type: string
 *     responses:
 *       200:
 *         description: Artisan mis à jour
 *       401:
 *         description: Non autorisé
 *       404:
 *         description: Artisan non trouvé
 */
router.put('/:id', verifyToken, updateArtisan);

/**
 * @swagger
 * /api/artisans/{id}:
 *   delete:
 *     summary: Supprime un artisan
 *     tags: [Artisans]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Artisan supprimé
 *       401:
 *         description: Non autorisé
 *       404:
 *         description: Artisan non trouvé
 */
router.delete('/:id', verifyToken, deleteArtisan);

module.exports = router;
