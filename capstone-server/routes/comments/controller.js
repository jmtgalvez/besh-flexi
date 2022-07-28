const db = require('../../configs/database/index');

exports.getAllComments = (post_id, user_id) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT a.*, b.first_name, b.last_name, b.username,
            case when a.post_id IN (SELECT post_id FROM USER_LIKES_POST c WHERE c.user_id = ?)
                then 'true'
                else 'false'
            end liked,
            (SELECT COUNT(*) FROM USER_LIKES_POST d WHERE d.post_id = a.post_id ) as 'likes'
            FROM posts a JOIN users b
            ON a.user_id = b.user_id
            WHERE reply_id = ?
            ORDER BY dateupdated DESC`

        const values = [user_id, post_id];

        db.query( sql, values, (err, rows) => {
            if (err) {
                console.log(`/routes/comments/controller/getAllComments DB Error: ${err.message}`)
                return reject(500)
            }
            if ( !rows || rows.length == 0)
                return reject(404);
            return resolve(rows);
        })
    })
}

exports.checkPostExists = post_id => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM posts WHERE post_id = ?`;

        db.query(sql, post_id, (err, rows) => {
            if (err) {
                console.log(`/routes/comments/controller/checkPostsExists DB Error: ${err.message}`);
                return reject(500)
            }
            if (!rows || !(rows.length > 0)) return reject(404);
            return resolve(rows[0]);
        });
    });
}

exports.addComment = comment => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO posts
            (user_id, content, reply_id, datecreated, dateupdated)
            VALUES (?, ?, ?, ?, ?)`;

        const values = [
            comment.user_id,
            comment.content,
            comment.reply_id,
            comment.date,
            comment.date,
        ]

        db.query(sql, values, (err, rows) => {
            if (err) {
                console.log(`/routes/comments/controller/addComment DB Error: ${err.message}`);
                return reject(500);
            }
            if ( !rows || rows.length == 0)
                return reject(404);
            return resolve(rows.insertId);
        });
    });
}