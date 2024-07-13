const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const StudentLogin = require('../models/loginModel');

// Login function
exports.login = async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const { username, password } = req.body;
    console.log("Username, Password:", username + ' : ' + password);

    // Find the user by username
    const user = await StudentLogin.findOne({ username });

    if (user) {
      // Compare the hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        const token = jwt.sign({id:user._id},'JWT_SECRET',{expiresIn:'2h'});
        return res.json({ success: true, message: 'Login successful!',token,username });
      } else {
        return res.json({ success: false, message: 'Invalid username or password' });
      }
    } else {
      return res.json({ success: false, message: 'Invalid username or password' });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};
