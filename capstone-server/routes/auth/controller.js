const db = require('../database/index');

exports.addUser = user => {
  return new Promise( (resolve, reject) => {
    const sql = `INSERT INTO users
      ( email, username, password)
      VALUES
      ( ?, ?, ?)`;

    const values = [
      user.email,
      user.username,
      user.password
    ]

    db.query(sql, values, (err, rows) => {
      if (err) {
        console.log(`/routes/auth/controller/register DB Error: ${err.message}`);
        return reject(500);
      }
      return resolve(rows.insertId);
    });
  });
}