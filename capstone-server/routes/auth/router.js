const express = require('express');
const router = express.Router();

const authCtrl = require('./controller');

router.post('/login', authCtrl.login);

router.post('/register', (req, res) => {
  console.log(req.body);
  // const { email, username, password, cPassword } = req.body;

  // if ( password === cPassword ) {

    // let sql = `INSERT INTO users 
    //    ( email, username, password )
    //    VALUES
    //    ( ?, ?, ? )`;
    // let values = [
    //   email, username, password
    // ];

    // db.query( sql, values, (err, rows) => {
    //   if (err) {
    //     console.log(`POST /register Error: ${err.message}`);
    //     res.render('registration', { error: 'Cannot add user.' });
    //   } else {
    //     console.log('DB: Added new admin.');
    //     res.redirect('/');
    //   }
    // });

  // } else {
  //   res.render('registration', { error: 'Passwords do not match.' });
  // }

});

module.exports = router;