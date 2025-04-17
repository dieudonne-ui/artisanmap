const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const setupSwagger = require('./swagger');

dotenv.config();

const app = express(); // ✅ On initialise app une seule fois ici

// Configuration de Swagger
setupSwagger(app);

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/artisans', require('./routes/artisans'));
app.use('/api/auth', require('./routes/auth'));

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {

})
.then(() => {
  console.log('MongoDB connecté');
  app.listen(process.env.PORT, () => {
    console.log(`Serveur démarré sur le port ${process.env.PORT}`);
  });
})
.catch((err) => console.error(err));
