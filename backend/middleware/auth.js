// src/middleware/auth.js
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'babbc0745649c1d5fe92a38bd80f5f486c183015be41eb61a225c36243246be9'; // Use environment variable in production


module.exports = async (req, res, next) => {
  const authHeader = req.header('Authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  const token = authHeader.replace('Bearer ', '');

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};


