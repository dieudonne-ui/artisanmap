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
      const { specialty, description, ville, telephone } = req.body;
  
      const newArtisan = new Artisan({
        name: req.user.name, // On prend le nom depuis le token
        specialty,
        description,
        ville,
        telephone
      });
  
      const saved = await newArtisan.save();
      res.status(201).json(saved);
    } catch (err) {
      res.status(400).json({ message: 'Échec de la création', error: err.message });
    }
  };
  

// PUT update — réservé aux rôles admin uniquement
const updateArtisan = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Accès refusé. Seul un admin peut modifier un artisan.' });
  }

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

// DELETE — réservé aux rôles admin uniquement
const deleteArtisan = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Accès refusé. Seul un admin peut supprimer un artisan.' });
  }

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
