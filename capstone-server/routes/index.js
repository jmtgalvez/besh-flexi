const express = require('express');
const router = express.Router();

router.use('/admin', require('./admin/index'));

router.get('/', (req, res) => {
  res.redirect('/admin');
})

router.use(require('./auth/router'));
// router.use(require('./users/router'));

module.exports = router;