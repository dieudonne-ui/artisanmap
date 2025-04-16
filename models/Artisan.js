const mongoose = require('mongoose');

const ArtisanSchema = new mongoose.Schema({
name: { type: String, required: true },
specialty: { type: String, required: true },
description: String,
location: String,
coordinates: {
lat: Number,
lng: Number
},
phone: String,
email: String,
image: String
});

module.exports = mongoose.model('Artisan', ArtisanSchema);