const express = require('express');
const cors = require('cors');

const app = express();

const hostname = 'localhost';
const port = 3001;

app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: `http://${hostname}:3000`
}));

app.use('/api', require('./routes/index.js'));

app.listen(port, () => {
  console.log(`Server started at http://${hostname}:${port} ...`);
});