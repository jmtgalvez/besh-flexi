const db = require('../database/index');

exports.getAllStatus = () => {
  return new Promise( (resolve, reject) => {
    const sql = `SELECT * FROM posts`;

    db.query(sql, (err, rows) => {
      if (err) {
        console.log(`/routes/posts/controller/getAllStatus DB Error: ${err.message}`);
        return reject(500);
      }
      return resolve(rows);
    });
  });
}

exports.addStatus = post => {
  return new Promise( (resolve, reject) => {
    const sql = `INSERT INTO posts
      (user_id, content, reply_id)
      VALUES (?, ?, ?)`;

    const values = [ 
      post.user_id, 
      post.content, 
      post.reply_id
    ]

    db.query( sql, values, (err, rows) => {
      if (err) {
        console.log(`/routes/posts/controller/addStatus DB Error: ${err.message}`);
        return reject(500);
      }
      return resolve(rows.insertId);
    });
  });
}

exports.checkStatusExists = status_id => {
  return new Promise( (resolve, reject) => {
    const sql = `SELECT * FROM posts WHERE post_id = ?`;

    db.query( sql, status_id, (err, rows) => {
      if (err) {
        console.log(`/routes/posts/controller/checkStatusExists DB Error: ${err.message}`);
        return reject(500);
      }
      if ( !rows || !(rows.length > 0) ) return reject(404);
      return resolve();
    });
  });
}

exports.editStatus = post => {
  return new Promise( (resolve, reject) => {
    const sql = `UPDATE posts SET
      content = ?
      WHERE post_id = ?`;

    const values = [
      post.content, 
      post.status_id
    ]

    db.query( sql, values, (err, rows) => {
      if (err) {
        console.log(`/routes/posts/controller/editStatus DB Error: ${err.message}`);
        return reject(500);
      }
      return resolve();
    });
  });
}

exports.deleteStatus = status_id => {
  return new Promise( (resolve, reject) => {
    const sql = `DELETE FROM posts WHERE post_id = ?`

    db.query( sql, status_id, (err, rows) => {
      if (err) {
        console.log(`/routes/posts/controller/deleteStatus DB Error: ${err.message}`);
        return reject(500);
      }
      return resolve();
    })
  })
}