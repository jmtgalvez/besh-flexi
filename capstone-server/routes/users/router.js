const express = require('express');
const router = express.Router();

const CTRL = require('./controller');

// get all users
router.get('/', async (req, res) => {
  try {
    const data = await CTRL.getAllUsers();

    res.status(200)
       .json({
        status: 200,
        message: 'Retrieved all users',
        data
       });
  } catch (status) {
    res.status(status).json({ status });
  }
})

// edit a user
router.put('/:user_id', async (req, res) => {
  try {
    const oldUserData = await CTRL.getUserByUserId(req.params.user_id);

    const newUserData = {
      user_id: req.params.user_id,
      first_name: req.body.first_name ? req.body.first_name : oldUserData.first_name,
      last_name: req.body.last_name ? req.body.last_name : oldUserData.last_name,
      username: req.body.username ? req.body.username : oldUserData.username,
      email: req.body.email ? req.body.email : oldUserData.email,
    };

    const status = await CTRL.editUser(newUserData);

    if (status === 200) {
      const user = await CTRL.getUserByUserId(req.params.user_id);

      res.status(200)
         .json({
           status: 200,
          message: 'Successfully edited user',
          user
         })
    }

  } catch (status) {
    res.status(status).json({ status });
  }
})

// delete a user
router.delete('/:user_id', async (req, res) => {
  try {
    await CTRL.getUserByUserId(req.params.user_id);
    
    await CTRL.deleteUser(req.params.user_id);
    res.status(200)
    .json({
        status: 200,
        message: 'Succesfully deleted user',
       })
  } catch (status) {
    res.status(status).json({ status });
  }
})

// get a user using his user_id
router.get('/:user_id', async (req, res) => {
  try {
    const user = await CTRL.getUserByUserId(req.params.user_id);

    res.status(200)
       .json({
        status: 200,
        message: 'Successfully retrieved user',
        user
       })
  } catch (status) {
    res.status(status).json({ status });
  }
})

// get users that has the name ':name'
router.get('/name/:name', async (req, res) => {
  try {
    const users = await CTRL.searchUsersByName(req.params.name);

    res.status(200).json({
      status: 200,
      message: `Succuessfully retrieved users`,
      users
    })
  } catch (status) {
    res.status(status).json({ status });
  }
})

module.exports = router;