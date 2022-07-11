const db = require('../../database/index');

exports.getAllUsers = () => {
  return new Promise( (resolve, reject) => {
    const sql = `SELECT * FROM users`;

    db.query(sql, (err, rows) => {
      if (err) {
        console.log(`/routes/users/controller/getAllUsers() DB Error: ${err.message}`);
        return reject(500);
      } else {
        return resolve(rows);
      }
    })
  })
}

exports.addUser = ( user ) => {
  return new Promise( (resolve, reject) => {
    const sql = `INSERT INTO users
    (email, username, password) 
    VALUES
    ( ?, ?, ?)`;

    const values = [
      user.email,
      user.username,
      user.password
    ];

    db.query(sql, values, (err, rows) => {
      if (err) {
        console.log(`/routes/users/controller/addUser() DB Error: ${err.message}`);
        return reject(500);
      } else {
        return resolve(rows.insertId);
      }
    });
  })
}