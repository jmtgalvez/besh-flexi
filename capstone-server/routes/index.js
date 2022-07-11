const express = require('express');
const router = express.Router();

router.use(require('./auth/router'));
router.use(require('./users/router'));

module.exports = router;