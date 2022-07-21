const express = require('express');
const router = express.Router();

const JWT = require('../auth/jwt');
const CTRL = require('./controller');

router.post('/follow/:following_id', JWT.verifyToken, async (req, res) => {
  try {
    await CTRL.checkUserExists(req.params.following_id);

    let result = CTRL.follow({ follower_id: req.user_id, following_id: req.params.following_id })
    res.status(200)
      .json({
      status: 200,
      message: 'Follow operation success',
    })
  } catch (status) {
    res.status(status).json({ status });
  }
})

router.post('/like/:post_id', JWT.verifyToken, async (req, res) => {
  try {
    await CTRL.checkPostExists(req.params.post_id);

    let result = await CTRL.like({ user_id: req.user_id, post_id: req.params.post_id })
    res.status(200)
      .json({
      status: 200,
      message: 'Like operation success',
    })
  } catch (status) {
    res.status(status).json({ status });
  }
})

router.post('/chat', async (req, res) => {
  try {

  } catch (status) {
    res.status(status).json({ status });
  }
})

module.exports = router;