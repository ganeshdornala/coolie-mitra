// server/routes/labour.js
const express = require('express');
const router = express.Router();
const { registerLabour } = require('../controllers/labourController.js');

router.post('/register', registerLabour);

module.exports = router;
