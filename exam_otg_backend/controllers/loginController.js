const StudentLogin = require('../models/loginModel');
exports.getLoginPage = (req, res) => {
    res.sendFile('login.html', { root: 'views' });
};
  
exports.login = async (req, res) => {
    try {
      console.log("Request Body:", req.body);
  
      const { username, password } = req.body;
      console.log("Username, Password:", username + ' : ' + password);
  
      const user = await StudentLogin.findOne({ "username": username, "password": password });
  
      if (user) {
        return res.json({ success: true, message: 'Login successful!' });
      } else {
        return res.status(401).json({ success: false, message: 'Invalid username or password' });
      }
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ success: false, message: 'Server error' });
    }
  };
  