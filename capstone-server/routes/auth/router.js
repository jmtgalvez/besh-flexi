const express = require('express');
const router = express.Router();

const CTRL = require('./controller')

router.post('/login', async (req, res) => {
  try {
    await CTRL.checkUser(req.body.email);

    const user = await CTRL.login(req.body);

    res.status(200).json({
      status: 200,
      message: 'Login Success',
      data: user,
    });
  } catch(status) {
    res.status(status).json({
      status,
      message: 'Invalid username / email / password combination',
    });
  }
});

router.post('/register', async (req, res) => {
  try {
    await CTRL.checkUser(req.body.email);

    const new_user_id = await CTRL.addUser(req.body);

    res.status(200).json({
      status: 200,
      message: 'Registration Success',
      data: new_user_id
    });
  } catch(status) {
    res.status(status).json({ 
      status: status,
      message: 'Invalid username / email',
    });
  }
});

module.exports = router;