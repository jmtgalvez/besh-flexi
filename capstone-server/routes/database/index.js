const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'bd11f83fb51443',
    password: '87eebf2e',
    database: 'heroku_27d48bef9ad971a'
});

module.exports = db;