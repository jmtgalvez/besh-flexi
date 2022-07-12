const db = require('../database/index');

exports.checkUser = email => {
  return new Promise( (resolve, reject) => {
    const sql = `SELECT * FROM users WHERE email = ? OR username = ?`;

    const values = [ email, email ];

    db.query(sql, values, (err, rows) => {
      if (err) {
        console.log(`/routes/auth/controller/checkUser DB Error: ${err.message}`);
        return reject(500);
      }
      if ( !rows )
        return reject(404);

      return resolve();
    });
  });
}

exports.login = email => {
  return new Promise( (resolve, reject) => {
    const sql = `SELECT * FROM users WHERE email = ? OR username = ?`;

    const values = [ email, email ];

    db.query(sql, values, (err, rows) =>{
      if (err) {
        console.log(`/routes/auth/controller/login DB Error: ${err.message}`);
        return reject(500);
      }
      return resolve(rows[0]);
    })
  });
}

exports.addUser = user => {
  return new Promise( async (resolve, reject) => {

    const sql = `INSERT INTO users
      ( first_name, last_name, email, username, password )
      VALUES
      ( ?, ?, ?, ?, ?)`;

    const values = [
      user.first_name,
      user.last_name,
      user.email,
      user.username,
      user.password
    ];

    db.query(sql, values, (err, rows) => {
      if (err) {
        console.log(`/routes/auth/controller/register DB Error: ${err.message}`);
        return reject(500);
      }
      return resolve(rows.insertId);
    });
  });
}