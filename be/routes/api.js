const express = require('express');
const router = express.Router();

router.use('/users', require('./user'));
router.use('/tasks', require('./task'));

module.exports = router;