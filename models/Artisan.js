const mongoose = require('mongoose');

const ArtisanSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  description: { type: String, required: true },
  ville: { type: String, required: true },
  telephone: { type: String, required: true }
});

const Artisan = mongoose.model('Artisan', ArtisanSchema);

module.exports = Artisan;
