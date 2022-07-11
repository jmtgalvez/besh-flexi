const express = require('express');
const cors = require('cors');

const app = express();

const hostname = 'localhost';
const port = 3001;

// const db = require('./routes/database/index');

app.set('view engine', 'hbs');

app.use(cors({
  origin: `http://${hostname}:3000`
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes/index.js'));

// app.post('/register', (req, res) => {
//   const { email, username, password, cPassword } = req.body;

//   if ( password === cPassword ) {

//     let sql = `INSERT INTO users 
//        ( email, username, password )
//        VALUES
//        ( ?, ?, ? )`;
//     let values = [
//       email, username, password
//     ];

//     db.query( sql, values, (err, rows) => {
//       if (err) {
//         console.log(`POST /register Error: ${err.message}`);
//         res.render('registration', { error: 'Cannot add user.' });
//       } else {
//         console.log('DB: Added new admin.');
//         res.redirect('/');
//       }
//     });

//   } else {
//     res.render('registration', { error: 'Passwords do not match.' });
//   }

// });

app.listen(port, () => {
  console.log(`Server started at http://${hostname}:${port} ...`);
});