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

    return user;
  } catch(status) {
    res.status(status).json({ status });
  }
});

router.post('/register', async (req, res) => {
  try {
    await authCtrl.checkUser(req.body.email);
    const userData = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      username: req.body.first_name + "." + req.body.last_name,
      password: req.body.password
    };

    const new_user_id = await authCtrl.addUser(userData);
    console.log(new_user_id);

    return new_user_id;
  } catch(status) {
    if (status === 500) return res.status(status).json({ status });
    res.status(409).json({ message: 'Email / username is not available.'});
  }
});

module.exports = router;