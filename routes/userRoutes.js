const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/tokenVerification')
const userController = require('../controllers/userController')

console.log('inside userRoutes');

router.get('/details', verifyToken,userController.getDetails);
router.post('/add-user-details',verifyToken,userController.setUserDetails);
router.post('/get-usernames',verifyToken,userController.getUsernames);
module.exports = router;
