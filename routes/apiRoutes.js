const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController')

router.post('/validate-token', apiController.validateToken);

module.exports = router;
