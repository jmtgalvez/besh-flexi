const express = require('express');
const router = express.Router();

const authCtrl = require('./controller')

router.post('/login', async (req, res) => {
  try {
    await authCtrl.checkUser(req.body.email);
    const loginData = {
      email: req.body.email,
      password: req.body.password
    };

    const user = await authCtrl.login(loginData);
    console.log(user);

  } catch(status) {
    res.status(status).json({ status });
  }
});

router.post('/user/add', async (req, res) => {
  try {
    const userData = {
      email: req.body.email,
      username: req.body.first_name + req.body.last_name,
      password: req.body.password
    };

    const new_user_id = await authCtrl.addUser(userData);
    console.log(new_user_id)
  } catch(status) {
    res.status(status).json({ status });
  }
});

module.exports = router;