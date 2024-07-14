const jwt = require('jsonwebtoken');

const tokenVerification = (req, res, next) => {
  const token = req.headers['authorization'];
  console.log("token : ",token);
  if (!token) {
    console.log("no token provided.");
    return res.json({ success:false,message: 'No token provided.' });
  }
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
