const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/tokenVerification')
const userController = require('../controllers/userController')

router.get('/details', verifyToken,userController.getDetails);
router.post('/add-user-details',verifyToken,userController.setUserDetails);

module.exports = router;
