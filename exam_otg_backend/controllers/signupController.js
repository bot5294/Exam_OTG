const bcrypt = require('bcrypt');
const StudentLogin = require('../models/loginModel');

// Signup function
exports.signup = async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const { username, email, password } = req.body;
    console.log("Username, Email, Password:", username + ' : ' + email + ' : ' + password);

    // check if user already exists
    let isAlreadyExists = await StudentLogin.findOne({"username":username});

    if(isAlreadyExists){
      return res.status(200).json({status:false,msg:'Username Already Taken.'});
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new StudentLogin({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    return res.json({ success: true, message: 'Signup successful!',username });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};
