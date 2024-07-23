const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const userController = require('../controllers/userController');
const verifyToken = require('../middlewares/tokenVerification');

console.log('here @ admin');
router.post('/login', loginController.adminLogin);
router.get('/users',verifyToken,userController.fetchUsers);
// router.post('/signup', signupController.signup);

module.exports = router;
