const db = require('../../database/index');

exports.login = (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  console.log(email);

  let sql = `SELECT * FROM users WHERE email = ? OR username = ?`;
  let values = [ email, email ];

  db.query( sql, values, (err, rows) => {
    if (err) console.log(`POST /login Error: ${err.message}`);
    if ( rows.length > 0) {
      if ( password === rows[0].password ) {
        res.render('home');
      } else {
        res.render('index', { error: 'Please check username or password'});
      }
    } else {
      res.render('index', { error: 'Please check username or password'});
    }
  });
};

exports.register = (req, res) => {
  const { email, username, password, cPassword } = req.body;

  if ( password === cPassword ) {

    let sql = `INSERT INTO users 
       ( email, username, password )
       VALUES
       ( ?, ?, ? )`;
    let values = [
      email, username, password
    ];

    db.query( sql, values, (err, rows) => {
      if (err) {
        console.log(`POST /register Error: ${err.message}`);
        res.render('registration', { error: 'Cannot add user.' });
      } else {
        console.log('DB: Added new admin.');
        res.redirect('/');
        return rows.insertId;
      }
    });

  } else {
    res.render('registration', { error: 'Passwords do not match.' });
  }

}