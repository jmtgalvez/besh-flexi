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

router.post('/status', async (req, res) => {
  try {
    const postData = {
      user_id: req.body.userId,
      content: req.body.userPostText,
      reply_id: req.body.reply_id ? req.body.reply_id : null,
      date: new Date(req.body.date_posted),
    };

    const new_post_id = await CTRL.addStatus(postData);

    res.status(200).json({
      status: 200,
      message: 'Successfully added post',
      data: new_post_id
    });
  } catch(status) {
    res.status(status).json({ status });
  }
});

router.put('/status/:status_id', async (req, res) => {
  try {
    await CTRL.checkStatusExists(req.params.status_id);

    const postData = {
      status_id: req.params.status_id,
      content: req.body.content,
    }

    await CTRL.editStatus(postData)
      .then( result => {
        res.status(200).json({
          status: 200,
          message: 'Successfully edited post',
        })
      })
      .catch( status => {
        res.status(status).json({
          status,
          message: 'Failed to edit post',
        })
      });
  } catch (status) {
    res.status(status).json({ status });
  }
});

router.delete('/status/:status_id', async (req, res) => {
  try {
    await CTRL.checkStatusExists(req.params.status_id);

    await CTRL.deleteStatus(req.params.status_id)
      .then( result => {
        res.status(200).json({
          status: 200,
          message: "Succesfully deleted post",
        })
      })
      .catch( status => {
        res.status(status).json({
          status,
          message: "Failed to delete post",
        })
      })
  } catch (status) {
    res.status(status).json({ status });
  }
})

module.exports = router;