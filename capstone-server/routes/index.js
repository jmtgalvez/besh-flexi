const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/admin');
})

router.use(require('./auth/router'));
router.use(require('./posts/router'));

module.exports = router;