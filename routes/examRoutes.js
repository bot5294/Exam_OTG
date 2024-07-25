const express = require('express');
const router = express.Router();
const examController = require('../controllers/examController');
const verify = require('../middlewares/tokenVerification');

router.get('/all',verify, examController);
module.exports = router;
