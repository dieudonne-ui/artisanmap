const Artisan = require('../models/Artisan');

// GET all
const getAllArtisans = async (req, res) => {
 try {
 const artisans = await Artisan.find();
 res.status(200).json(artisans);
 } catch (err) {
 res.status(500).json({ message: 'Erreur serveur', error: err.message });
 }
};

// GET one
const getArtisanById = async (req, res) => {
 try {
 const artisan = await Artisan.findById(req.params.id);
 if (!artisan) return res.status(404).json({ message: 'Artisan introuvable' });
 res.status(200).json(artisan);
 } catch (err) {
 res.status(500).json({ message: 'Erreur serveur', error: err.message });
 }
};

// POST create
const createArtisan = async (req, res) => {
 try {
 const newArtisan = new Artisan(req.body);
 const saved = await newArtisan.save();
 res.status(201).json(saved);
 } catch (err) {
 res.status(400).json({ message: 'Échec de la création', error: err.message });
 }
};

// PUT update
const updateArtisan = async (req, res) => {
 try {
 const updated = await Artisan.findByIdAndUpdate(req.params.id, req.body, {
 new: true,
 runValidators: true
 });
 if (!updated) return res.status(404).json({ message: 'Artisan non trouvé' });
 res.status(200).json(updated);
 } catch (err) {
 res.status(400).json({ message: 'Erreur de mise à jour', error: err.message });
 }
};

// DELETE
const deleteArtisan = async (req, res) => {
 try {
 const deleted = await Artisan.findByIdAndDelete(req.params.id);
 if (!deleted) return res.status(404).json({ message: 'Artisan non trouvé' });
 res.status(200).json({ message: 'Artisan supprimé' });
 } catch (err) {
 res.status(500).json({ message: 'Erreur serveur', error: err.message });
 }
};

module.exports = {
 getAllArtisans,
 getArtisanById,
 createArtisan,
 updateArtisan,
 deleteArtisan
};