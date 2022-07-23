const db = require('../database/index');

exports.getAllStatus = () => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT a.*, b.first_name, b.last_name, b.username FROM posts a JOIN users b ON a.user_id = b.user_id ORDER BY dateupdated DESC`;

        db.query(sql, (err, rows) => {
            if (err) {
                console.log(`/routes/posts/controller/getAllStatus DB Error: ${err.message}`);
                return reject(500);
            }
            return resolve(rows);
        });
    });
}

exports.getAllFollowedPosts = user_id => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT a.*, b.first_name, b.last_name, b.username,
        case when a.post_id IN (SELECT post_id FROM USER_LIKES_POST c WHERE c.user_id = ?)
            then 'true'
            else 'false'
        end liked
        FROM posts a JOIN users b ON a.user_id = b.user_id
        WHERE b.user_id IN (SELECT following_id FROM USER_FOLLOWS_USER WHERE follower_id = ?)
        OR b.user_id = ?
        ORDER BY dateupdated DESC`

        const values = [ user_id, user_id, user_id ]

        db.query( sql, values, (err, rows) => {
            if (err) {
                console.log(`/routes/posts/controller/getAllFollowedPosts DB Error: ${err.message}`);
                return reject(500);
            }
            return resolve(rows);
        })
    })
}

exports.addStatus = post => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO posts
            (user_id, content, reply_id, datecreated, dateupdated)
            VALUES (?, ?, ?, ?, ?)`;

        const values = [
            post.user_id,
            post.content,
            post.reply_id,
            post.date,
            post.date,
        ]

        db.query(sql, values, (err, rows) => {
            if (err) {
                console.log(`/routes/posts/controller/addStatus DB Error: ${err.message}`);
                return reject(500);
            }
            return resolve(rows.insertId);
        });
    });
}

exports.checkStatusExists = status_id => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM posts WHERE post_id = ?`;

        db.query(sql, status_id, (err, rows) => {
            if (err) {
                console.log(`/routes/posts/controller/checkStatusExists DB Error: ${err.message}`);
                return reject(500);
            }
            if (!rows || !(rows.length > 0)) return reject(404);
            return resolve(rows[0]);
        });
    });
}

exports.editStatus = post => {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE posts SET
      content = ?
      WHERE post_id = ?`;

        const values = [
            post.content,
            post.status_id
        ]

        db.query(sql, values, (err, rows) => {
            if (err) {
                console.log(`/routes/posts/controller/editStatus DB Error: ${err.message}`);
                return reject(500);
            }
            return resolve();
        });
    });
}

exports.deleteStatus = status_id => {
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM posts WHERE post_id = ?`

        db.query(sql, status_id, (err, rows) => {
            if (err) {
                console.log(`/routes/posts/controller/deleteStatus DB Error: ${err.message}`);
                return reject(500);
            }
            return resolve();
        })
    })
}

exports.searchStatus = ( search_query, user_id ) => {
    return new Promise( (resolve, reject) => {
        search_query = `%${search_query}%`;
        const sql = `SELECT a.*, b.first_name, b.last_name, b.username,
            case when a.post_id IN (SELECT post_id FROM USER_LIKES_POST c WHERE c.user_id = ?)
                then 'true'
                else 'false'
            end isLiked
            FROM posts a JOIN users b
            ON a.user_id = b.user_id
            WHERE 
            (b.user_id IN (SELECT following_id FROM USER_FOLLOWS_USER WHERE follower_id = ?)
            OR b.user_id = ?)
            AND 
            (a.content LIKE ? OR b.username LIKE ? OR b.first_name LIKE ? OR b.last_name LIKE ?)
            ORDER BY dateupdated DESC`
        const values = [
            user_id,
            user_id,
            user_id,
            search_query,
            search_query,
            search_query,
            search_query
        ]
        
        db.query(sql, values, (err, rows) => {
            if (err) {
                console.log(`/routes/post/controller/searchStatus DB Error: ${err.message}`);
                return reject(500);
            }
            return resolve(rows);
        })
    })
}