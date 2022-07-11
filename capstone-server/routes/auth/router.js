const express = require('express');
const router = express.Router();

const authCtrl = require('./controller');

router.post('/user/add', async (req, res) => {
  try {
    const user = {
      email: req.body.email,
      username: req.body.first_name + req.body.last_name,
      password: req.body.password
    };

    const new_user_id = await authCtrl.addUser(user);
    console.log(new_user_id)
  } catch(status) {
    res.status(status).json({ status });
  }
});

module.exports = router;