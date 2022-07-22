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

exports.checkPostExists = post_id => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM posts WHERE post_id = ?`

    db.query( sql, post_id, (err, rows) => {
      if (err) {
        console.log(`/routes/interactions/controllers/checkPostExists DB Error: ${err.message}`);
        return reject(500);
      }
      if ( !rows || rows.length === 0)
        return reject(404);
      return resolve();
    })
  })
}

exports.like = ({ user_id, post_id }) => {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO user_likes_post
      ( user_id, post_id )
      VALUES ( ?, ? )`

    const values = [ user_id, post_id ];

    db.query( sql, values, (err, rows) => {
      if (err) {
        console.log(`/routes/interactions/controller/like DB Error: ${err.message}`);
        return reject(500);
      }
      return resolve(rows.insertId);
    });
  });
}

exports.unlike = ({ user_id, post_id }) => {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM user_likes_post
      WHERE user_id = ?
      AND post_id = ?`

    const values = [ user_id, post_id ];

    db.query( sql, values, (err, rows) => {
      if (err) {
        console.log(`/routes/interactions/controller/like DB Error: ${err.message}`);
        return reject(500);
      }
      return resolve(rows.insertId);
    });
  });
}

exports.checkChatExists = (user1, user2) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT chat_id FROM USER_CHATS_USER
    WHERE
    (user1 = ? && user2 = ?)
    OR
    (user2 = ? && user1 = ?)`;

    const values = [
      user1, user2,
      user1, user2
    ];

    db.query( sql, values, async (err, rows) => {
      if (err) {
        console.log(`/routes/interactions/controller/checkChatExists DB Error: ${err.message}`);
        return reject(500);
      }
      if ( !rows || rows.length === 0 ) {
        createChat(user1, user2)
          .then( chat_id => resolve(chat_id) )
          .catch( status => reject(status) )
      }
        // return reject(404);
      return resolve(rows[0].chat_id);
    });
  });
}

createChat = (user1, user2) => {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO USER_CHATS_USER ( user1, user2 ) VALUES ( ?, ? )`
    const values = [ user1, user2 ];
    db.query( sql, values, (err, rows) => {
      if (err) {
        console.log(`/routes/interactions/controller/createChat DB Error: ${err.message}`);
        return reject(500);
      }
      return resolve(rows.insertId);
    })
  })
}