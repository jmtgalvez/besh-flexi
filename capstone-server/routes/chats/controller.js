const db = require('../database/index');

exports.checkChatExists = (sender_id, receiver_id) =>{
    return new Promise((resolve, reject)=>{
        const sql = `SELECT * FROM user_chats_user WHERE 
        user1 = ? AND user2 = ? 
        OR user1 = ? AND user2 = ?`;

         const values = [sender_id, receiver_id, receiver_id, sender_id];

         db.query(sql, values, (err, rows)=>{
            if (err){
                console.log(`/routes/auth/controller/checkChatExists DB Error: ${err.message}`);
                return reject(500);
            }
            if (!(rows.length > 0)){
                return reject(404)
            }

            return resolve(rows[0]);
         })
    })
}

exports.sendChat = chat => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO user_chats_user
        ( user1, user2 )
        VALUES (?, ?)`;

        const values = [
            chat.user_id,
            chat.receiver_id
        ]

        db.query(sql, values, (err, rows)=>{
            if (err){
                console.log(`/routes/posts/controller/sendChat DB Error: ${err.message}`);
                return reject(500);
            }
            return resolve(rows.chat_id)
        })
    })
}

exports.sendReply = chat =>{
    return new Promise((resolve, reject)=>{
        const sql = `INSERT INTO chat_messages
        ( content, sender_id, chat_id )
        VALUES (?, ?, ?)`;

        const values = [
            chat.content,
            chat.sender_id,
            chat.chat_id
        ]

        db.query(sql, values, (err, rows)=>{
            if(err){
                console.log(`/routes/posts/controller/sendReply DB Error: ${err.message}`);
                return reject(500);
            }
            return resolve(rows);
        })
    })
}

exports.getConversation = chat =>{
    return new Promise((resolve, reject)=>{
        const sql = `SELECT a.*, b.sender_id, b.content, c.first_name, c.last_name, c.username  FROM user_chats_user a
        JOIN chat_messages b on a.chat_id = b.chat_id
        JOIN users c on user_id = b.sender_id
        where a.chat_id = ? ORDER BY b.datecreated DESC`

        const values = chat;

        db.query(sql, values, (err, rows)=>{
            if(err){
                console.log(`/routes/posts/controller/getConversation DB Error: ${err.message}`);
                return reject(500);
            }
            return resolve(rows);
        })
    })
}
