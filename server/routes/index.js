const express = require('express');
const router = express.Router();
const users = require('./AddCharacter')


router.use('/users', users)

module.exports = router;