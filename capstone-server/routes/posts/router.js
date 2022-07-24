const express = require('express');
const router = express.Router();

const JWT = require('../auth/jwt');
const CTRL = require('./controller');

router.get('/', JWT.verifyToken, async (req, res) => {
  try {

    const posts = await CTRL.getAllFollowedPosts(req.user_id);

    res.status(200)
       .json({
          status: 200,
          message: 'Retrieved all posts',
          posts,
       });
  } catch (status) {
    res.status(status).json({ status });
  }
});

router.post('/', JWT.verifyToken, async (req, res) => {
  try {
    const postData = {
      user_id: req.user_id,
      content: req.body.content,
      reply_id: req.body.reply_id ? req.body.reply_id : null,
      date: req.body.date_posted ? new Date(req.body.date_posted) : new Date(),
    };

    const new_post_id = await CTRL.addStatus(postData);

    res.status(200).json({
      status: 200,
      message: 'Successfully added post',
      post_id: new_post_id
    });
  } catch(status) {
    res.status(status).json({ status });
  }
});

router.put('/:status_id', JWT.verifyToken, async (req, res) => {
  try {
    const post = await CTRL.checkStatusExists(req.params.status_id);

    if ( post.user_id === req.user_id ) {
      const postData = {
        status_id: req.params.status_id,
        content: req.body.content,
      }
  
      await CTRL.editStatus(postData)
      res.status(200).json({
        status: 200,
        message: 'Successfully edited post',
      })
    }
  } catch (status) {
    res.status(status).json({ status });
  }
});

router.delete('/:status_id', JWT.verifyToken, async (req, res) => {
  try {
    const post = await CTRL.checkStatusExists(req.params.status_id);

    if ( post.users_id === req.user_id ) {
      await CTRL.deleteStatus(req.params.status_id)
      res.status(200).json({
        status: 200,
        message: "Succesfully deleted post",
      })
    }
  } catch (status) {
    res.status(status).json({ status });
  }
});

router.get('/search/:search_query', JWT.verifyToken, async (req, res) => {
  try {
    const posts = await CTRL.searchStatus( req.params.search_query, req.user_id );
    res.status(200).json({
      status: 200,
      posts
    })
  } catch (status) {
    res.status(status).json({ status });
  }
});

module.exports = router;