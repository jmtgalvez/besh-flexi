const db = require('../../configs/database/index');
const bcrypt = require('bcrypt');

exports.checkUserExists = email => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM users WHERE email = ? OR username = ?`;

        const values = [email, email];

        db.query(sql, values, (err, rows) => {
            if (err) {
                console.log(`/routes/auth/controller/checkUserExists DB Error: ${err.message}`);
                return reject(500);
            }
            if (!(rows.length > 0))
                return reject(404);

            return resolve(rows[0]);
        });
    });
}

exports.checkUserExistsByUserId = user_id => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM users WHERE user_id = ?`

        db.query(sql, user_id, (err, rows) => {
            if (err) {
                console.log(`/routes/auth/controller/checkUserExistsByUserId DB Error: ${err.message}`);
                return reject(500);
            }
            if (!(rows.length > 0))
                return reject(404);

            return resolve(rows[0]);
        })
    })
}

exports.checkEmailAvailable = email => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM users WHERE email = ?`;

        db.query(sql, email, (err, rows) => {
            if (err) {
                console.log(`/routes/auth/controller/checkUserAvailable DB Error: ${err.message}`);
                return reject({
                    status: 500,
                    message: err.message
                });
            }
            if (!(rows.length > 0))
                return resolve();

            return reject({
                status: 409,
                message: "Email not available"
            });
        });
    });
}

exports.checkUsernameAvailable = username => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM users WHERE username = ? OR username = ?`;

        const values = [username.toLowerCase(), username.toLowerCase()];

        db.query(sql, values, (err, rows) => {
            if (err) {
                console.log(`/routes/auth/controller/checkUserAvailable DB Error: ${err.message}`);
                return reject({
                    status: 500,
                    message: err.message
                });
            }
            if (!(rows.length > 0))
                return resolve();

            return reject({
                status: 409,
                message: "Username not available"
            });
        });
    });
}

exports.login = credentials => {
    return new Promise(async(resolve, reject) => {
        const sql = `SELECT * FROM users WHERE email = ? OR username = ?`;

        const values = [credentials.email, credentials.email];

        db.query(sql, values, async(err, rows) => {
            if (err) {
                console.log(`/routes/auth/controller/login DB Error: ${err.message}`);
                return reject(500);
            }
            if (rows && await bcrypt.compare(credentials.password, rows[0].password)) {

                const { user_id, email, username, first_name, last_name } = rows[0];

                const user = {
                    user_id,
                    email,
                    username,
                    first_name,
                    last_name,
                }
                
                return resolve(user);

            } else {
                return reject(401);
            }
        });
    });
}

exports.addUser = user => {
    return new Promise(async(resolve, reject) => {

        const hashPwd = await bcrypt.hash(user.password, 8);

        // let username = user.username ? user.username : user.first_name + "." + user.last_name;
        // username = username.toLowerCase();

        const sql = `INSERT INTO users
      ( first_name, last_name, email, username, password )
      VALUES
      ( ?, ?, ?, ?, ?)`;

        const values = [
            user.first_name,
            user.last_name,
            user.email,
            user.username,
            hashPwd,
        ];

        db.query(sql, values, (err, rows) => {
            if (err) {
                console.log(`/routes/auth/controller/register DB Error: ${err.message}`);
                return reject({
                    status: 500,
                    message: err.message
                });
            }
            return resolve(rows.insertId);
        });
    });
}

exports.authorizeUser = credentials => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM users
    WHERE
    user_id = ?`;

    db.query( sql, credentials.user_id, async (err, rows) => {
      if (err) {
        console.log(`/routes/users/controllers/validateUser DB Error: ${err.message}`);
        return reject(500);
      }
      if ( !rows || rows.length === 0 )
        return reject(404);
      if ( await bcrypt.compare(credentials.password, rows[0].password))
        return resolve(rows[0]);
      return reject(403);
    })
  })
}