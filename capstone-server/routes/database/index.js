const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'capstone',
    password: 'capstone',
    database: 'capstone',
    port: 3306
});

module.exports = db;