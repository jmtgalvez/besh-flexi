const db = require('../database/index');

exports.login = (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  console.log(email);

  let sql = `SELECT * FROM users WHERE email = ? OR username = ?`;
  let values = [ email, email];

  db.query( sql, values, (err, rows) => {
    if (err) console.log(`POST /login Error: ${err.message}`)
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
}