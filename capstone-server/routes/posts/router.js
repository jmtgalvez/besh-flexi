const express = require('express');
const router = express.Router();

const CTRL = require('./controller')

router.get('/', async (req, res) => {
  try {
    const posts = await CTRL.getAllStatus();

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

router.post('/', async (req, res) => {
  try {
    const postData = {
      user_id: req.body.user_id,
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

router.put('/:status_id', async (req, res) => {
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

router.delete('/:status_id', async (req, res) => {
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
});

router.get('/:search_query', async (req, res) => {
  try {
    res.status(200).json({
      status: 200,
      data: await CTRL.searchStatus({ search_query: req.params.search_query })
    })
  } catch (status) {
    res.status(status).json({ status });
  }
});

module.exports = router;