const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const signupController = require('../controllers/signupController')

console.log("here");

router.post('/login', loginController.login);
router.post('/signup', signupController.signup);

module.exports = router;
