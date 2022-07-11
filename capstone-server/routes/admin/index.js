const express = require('express');
const router = express.Router();

router.use(require('./auth/router'));
router.use(require('./users/router'));

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/register', (req, res) => {
  res.render('registration');
});

router.get('/home', (req, res) => {
  res.render('home');
});

module.exports = router;