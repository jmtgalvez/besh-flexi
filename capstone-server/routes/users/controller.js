const db = require('../database/index');
const bcrypt = require('bcrypt');

exports.getAllUsers = () => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT 
      user_id, first_name, last_name, email, username
      FROM users`;

    db.query(sql, (err, rows) => {
      if (err) {
        console.log(`/routes/users/controllers/getAllUsers DB Error: ${err.message}`);
        return reject(500);
      }
      if (rows.length === 0) return reject(404)
      return resolve(rows);
    });
  });
}

exports.searchUsersByName = name => {
  return new Promise((resolve, reject) => {
    name = `%${name}%`;
    const sql = `SELECT 
      user_id, first_name, last_name, email, username
      FROM users
      WHERE 
      first_name LIKE ? OR
      last_name LIKE ? OR
      username LIKE ?`;

    const values = [ name, name, name ];

    db.query(sql, values, (err, rows) => {
      if (err) {
        console.log(`/routes/users/controllers/searchUsersByName DB Error: ${err.message}`);
        return reject(500);
      }
      if (rows.length === 0) return reject(404)
      return resolve(rows);
    });
  });
}

exports.getUserByUserId = user_id => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT 
      user_id, first_name, last_name, email, username
      FROM users WHERE user_id = ?`;

    db.query(sql, user_id, (err, rows) => {
      if (err) {
        console.log(`/routes/users/controllers/searchUsersByUserId DB Error: ${err.message}`);
        return reject(500);
      }
      if (rows.length === 0)
        return reject(404);

      return resolve(rows[0]);
    })
  }) 
}

exports.editUser = user => {
  return new Promise((resolve, reject) => {
    const sql = `UPDATE users  SET
      first_name = ?,
      last_name = ?,
      email = ?,
      username = ?
      WHERE user_id = ?`;

    const values = [
      user.first_name,
      user.last_name,
      user.email,
      user.username,
      user.user_id
    ]

    db.query(sql, values, (err, rows) => {
      if (err) {
        console.log(`/routes/users/controllers/editUser DB Error: ${err.message}`);
        return reject(500);
      }
      return resolve(200);
    });
  })
}

exports.deleteUser = user_id => {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM users WHERE user_id = ?`;

    db.query(sql, user_id, (err, rows) => {
      if (err) {
        console.log(`/routes/users/controllers/deleteUser DB Error: ${err.message}`);
        return reject(500);
      }
      return resolve(200);
    })
  })
}