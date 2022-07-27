const mysql = require('mysql2');

let db = mysql.createPool({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'bd11f83fb51443',
    password: '87eebf2e',
    database: 'heroku_27d48bef9ad971a'
});

const handleDisconnect = () => {
    db = mysql.createPool({
        host: 'us-cdbr-east-06.cleardb.net',
        user: 'bd11f83fb51443',
        password: '87eebf2e',
        database: 'heroku_27d48bef9ad971a'
    });

    // db.connect((err) => {
    //     if (err) {
    //         console.log('Error connectiong to database ...' + err);
    //         return setTimeout(handleDisconnect, 2000);
    //     }
    //     console.log('Successfully connected to database ...');
    // })

    db.on('error', (err) => {
        console.log(`DB Error: ${err}`);
        if ( err.code === 'PROTOCOL_CONNECTION_LOST' ) {
            handleDisconnect();
        } else {
            throw err;
        }
    })
}

handleDisconnect();

module.exports = db;