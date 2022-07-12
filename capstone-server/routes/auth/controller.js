const db = require('../database/index');
const bcrypt = require('bcrypt');

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

exports.login = user => {
  return new Promise( async (resolve, reject) => {
    const sql = `SELECT * FROM users WHERE email = ? OR username = ?`;

    const values = [ email, email ];

    db.query(sql, values, async (err, rows) =>{
      if (err) {
        console.log(`/routes/auth/controller/login DB Error: ${err.message}`);
        return reject(500);
      }

      if ( !rows || await bcrypt.compare(user.password, rows[0].password )) {
        return reject(401);
      }

      const { user_id, email, username, first_name, last_name } = rows[0];

      const user = {
        user_id,
        email,
        username,
        first_name,
        last_name,
      }

      return resolve(user);
    });
  });
}

exports.addUser = user => {
  return new Promise( async (resolve, reject) => {

    const hashPwd = await bcrypt.hash(user.password, 8);

    let username = user.username ? user.username : user.first_name + "." + user.last_name;
    username = username.toLowerCase();

    const sql = `INSERT INTO users
      ( first_name, last_name, email, username, password )
      VALUES
      ( ?, ?, ?, ?, ?)`;

    const values = [
      user.first_name,
      user.last_name,
      user.email,
      username,
      hashPwd,
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