const jwt = require('jsonwebtoken');

const tokenVerification = (req, res, next) => {
  const authorizationHeader = req.headers['authorization'];

  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
    console.log("No token provided.");
    return res.status(401).json({ success: false, message: 'No token provided.' });
  }

  // Extract token without the 'Bearer ' prefix
  const token = authorizationHeader.split(' ')[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
        console.log("error at token validation : ",err);
      return res.json({ success:false,message: 'Failed to authenticate token.' });
    }
    req.userId = decoded.id;
    console.log("next called");
    next();
  });
};

module.exports = tokenVerification;
