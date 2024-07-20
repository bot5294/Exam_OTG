require('dotenv').config();
const jwt = require('jsonwebtoken');
exports.validateToken = (req,res)=>{
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ valid: false, message: 'Token is required' });
    }
  
    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      res.status(200).json({ valid: true, decodedToken });
    } catch (error) {
      res.status(401).json({ valid: false, message: 'Invalid token' });
    }
}