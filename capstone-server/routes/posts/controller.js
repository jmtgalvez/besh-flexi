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