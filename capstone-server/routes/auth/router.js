const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const authCtrl = require('./controller')

router.post('/login', async (req, res) => {
  try {
    await authCtrl.checkUser(req.body.email);
    const user = await authCtrl.login(req.body.email)
    if ( await bcrypt.compare( req.body.password, user.password ))
      res.status(200).json({
        status: 200,
        message: 'Login Success',
        data: user
      })
  } catch(status) {
    res.status(status).json({ status });
  }
});

router.post('/register', async (req, res) => {
  try {
    await authCtrl.checkUser(req.body.email);

    const hashPwd = await bcrypt.hash(req.body.password, 8);

    let username = req.body.first_name + "." + req.body.last_name;
    username = username.toLowerCase();

    const userData = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      username,
      password: hashPwd
    };

    const new_user_id = await authCtrl.addUser(userData);

    res.status(200).json({
      status: 200,
      message: 'Registration Success',
      data: new_user_id
    })
  } catch(status) {
    if (status === 500) return res.status(status).json({ status });
    res.status(409).json({ message: 'Email / username is not available.'});
  }
});

module.exports = router;