const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer '))
    return res.status(401).json({ message: 'Token manquant' });

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
      id: decoded.id,
      name: decoded.name,
      role: decoded.role
    };
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token invalide' });
  }
};

module.exports = verifyToken;
