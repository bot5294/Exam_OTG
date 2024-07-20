require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const StudentLogin = require('../models/loginModel');
const AdminLogin = require('../models/adminLoginModel');

// Login function
exports.login = async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const { email, password } = req.body;
    console.log("Email, Password:", email + ' : ' + password);

    // Find the user by username
    const user = await StudentLogin.findOne({ email });

    if (user) {
      username = user.username;
      user_id = user._id;
      // Compare the hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'2h'});
        return res.json({ success: true, message: 'Login successful!',token,username,user_id});
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


exports.adminLogin = async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const { email, password } = req.body;
    console.log("Email, Password:", email + ' : ' + password);

    // Find the user by username
    const user = await AdminLogin.findOne({ email });

    if (user) {
      user_id = user._id;
      // Compare the hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'2h'});
        return res.json({ success: true, message: 'Login successful!',token,user_id});
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