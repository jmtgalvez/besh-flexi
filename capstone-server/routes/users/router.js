const express = require('express');
const router = express.Router();

const userCtrl = require('./controller');

router.get('/users', async (req, res) => {
  try {
    let users = await userCtrl.getAllUsers();
    console.log(users);
    res.status(200).json({
      status: 200,
      data: users
    });
  } catch (status) {
    res.status(status).res.json({ status });
  }
});

router.post('/user/add', async (req, res) => {
  if (
    req.body.email &&
    req.body.username &&
    req.body.password &&
    req.body.cPassword
  ) {
    try {
      let user_id = await userCtrl.addUser(req.body);
      res.status(201).json({
        status: 201,
        message: 'Successfully created new user',
        data: user_id
      });
    } catch (status) {
      res.status(status).json({ status });
    }
  } else {
    res.status(400).json({ status: 400 });
  }
});

router.put('/user/edit', async (req, res) => {
  if ( req.body.lenght > 0 ) {

  } else {
    res.status(400).json({ status: 400 });
  }
});

module.exports = router;