const db = require('../database/index');

exports.checkUserExists = user_id => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM users WHERE user_id = ?`

    db.query( sql, user_id, (err, rows) => {
      if (err) {
        console.log(`/routes/interactions/controllers/checkUserExists DB Error: ${err.message}`);
        return reject(500);
      }
      return resolve();
    })
  })
}

exports.checkPostExists = post_id => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM users WHERE post_id = ?`

    db.query( sql, post_id, (err, rows) => {
      if (err) {
        console.log(`/routes/interactions/controllers/checkPostExists DB Error: ${err.message}`);
        return reject(500);
      }
      return resolve();
    })
  })
}

exports.follow = ({ follower_id, following_id }) => {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO user_follows_user
      ( follower_id, following_id )
      VALUES ( ?, ?)`
    const values = [ follower_id, following_id ];

    db.query( sql, values, (err, rows) => {
      if (err) {
        console.log(`/routes/interactions/controller/follow DB Error: ${err.message}`);
        return reject(500);
      }
      return resolve(rows.insertId);
    })
  })
}

exports.like = ({ user_id, post_id }) => {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO user_likes_post
      ( user_id, post_id )
      VALUES ( ?, ?)`
    const values = [ user_id, post_id ];

    db.query( sql, values, (err, rows) => {
      if (err) {
        console.log(`/routes/interactions/controller/like DB Error: ${err.message}`);
        return reject(500);
      }
      return resolve(rows.insertId);
    })
  })
}