const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentification des utilisateurs
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Enregistre un nouvel utilisateur
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: utilisateur@example.com
 *               motDePasse:
 *                 type: string
 *                 example: monmotdepasse
 *     responses:
 *       201:
 *         description: Utilisateur enregistré
 *       400:
 *         description: Erreur de validation
 */
router.post('/register', register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Connecte un utilisateur
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: utilisateur@example.com
 *               motDePasse:
 *                 type: string
 *                 example: monmotdepasse
 *     responses:
 *       200:
 *         description: Connexion réussie avec token
 *       401:
 *         description: Identifiants invalides
 */
router.post('/login', login);

module.exports = router;
