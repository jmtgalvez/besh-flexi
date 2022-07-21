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

    const likeData = {
      user_id: req.user_id,
      post_id: req.params.post_id,
    }

    let result = await CTRL.like(likeData);
    res.status(200)
      .json({
      status: 200,
      message: 'Like operation success',
    })
  } catch (status) {
    res.status(status).json({ status });
  }
})

router.post('/unlike/:post_id', JWT.verifyToken, async (req, res) => {
  try {
    await CTRL.checkPostExists(req.params.post_id);

    let result = await CTRL.unlike({ user_id: req.user_id, post_id: req.params.post_id })
    res.status(200)
      .json({
      status: 200,
      message: 'Unike operation success',
    })
  } catch (status) {
    res.status(status).json({ status });
  }
})

router.post('/chat', JWT.verifyToken, async (req, res) => {
  try {
    const chat_id = await CTRL.checkChatExists({ user1: req.user_id, user2: req.body.recipient_id });

    const chatData = {
      content: req.body.content,
      sender_id: req.user_id,
      chat_id
    }

    const result = await CTRL.addChatMessage(chatData);
    res.status(200).json({
      status: 200,
      message: 'Message sent successfully'
    })
  } catch (status) {
    res.status(status).json({ status });
  }
})

module.exports = router;