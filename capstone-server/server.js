require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'https://besh-flexi.netlify.app',
  // origin: 'http://localhost:3000',
  allowedHeaders: ['Content-Type','Authorization'],
  credentials: true
}));

app.use('/api', require('./routes/index'));

app.listen(port, () => {
  console.log(`Server started at port ${port} ...`);
});