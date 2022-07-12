const express = require('express');
const router = express.Router();

const CTRL = require('./controller')

router.get('/status', async (req, res) => {
  try {
    const posts = await CTRL.getAllStatus();

    res.status(200).json({
      status: 200,
      message: 'Retrieved all posts',
      data: posts,
    });
  } catch (status) {
    res.status(status).json({ status });
  }
});

router.post('/status/add', async (req, res) => {
  try {
    await CTRL.checkUser(req.body.email);

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

    const new_user_id = await CTRL.addUser(userData);

    res.status(200).json({
      status: 200,
      message: 'Registration Success',
      data: new_user_id
    });
  } catch(status) {
    if (status === 500) return res.status(status).json({ status });
    res.status(409).json({ message: 'Email / username is not available.'});
  }
});

module.exports = router;