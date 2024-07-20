const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const signupController = require('../controllers/signupController')

console.log('here @ admin');
router.post('/login', loginController.adminLogin);
// router.post('/signup', signupController.signup);

module.exports = router;
