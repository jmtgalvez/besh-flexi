const express = require('express');
const router = express.Router();

const JWT = require('../auth/jwt');
const CTRL = require('./controller');
const AuthCTRL = require('../auth/controller');

// get all users
router.get('/', JWT.verifyToken, async (req, res) => {
  try {
    const users = await CTRL.getAllUsers();

    res.status(200)
       .json({
        status: 200,
        message: 'Retrieved all users',
        users
       });
  } catch (status) {
    res.status(status).json({ status });
  }
})

// edit a user
router.put('/:user_id', JWT.verifyToken, async (req, res) => {
  try {
    if ( req.params.user_id === req.user_id ) {
      const oldUserData = await CTRL.getUserByUserId(req.user_id);
      
      const credentials = {
        user_id: req.user_id,
        password: req.body.password,
      }

      await AuthCTRL.authorizeUser(credentials);
  
      const newUserData = {
        user_id: req.user_id,
        first_name: req.body.first_name || oldUserData.first_name,
        last_name: req.body.last_name || oldUserData.last_name,
        username: req.body.username || oldUserData.username,
        email: req.body.email || oldUserData.email,
      };
  
      const status = await CTRL.editUser(newUserData);
  
      if (status === 200) {
        const user = await CTRL.getUserByUserId(req.user_id);
  
        res.status(200)
           .json({
              status: 200,
              message: 'Successfully edited user',
              user
           })
      }
    }
  } catch (status) {
    res.status(status).json({ status });
  }
})

// delete a user
router.delete('/:user_id', JWT.verifyToken, async (req, res) => {
  try {
    if ( req.params.user_id === req.user_id ) {
      await CTRL.getUserByUserId(req.user_id);
      
      const credentials = {
        user_id: req.user_id,
        password: req.body.password,
      }

      await AuthCTRL.authorizeUser(credentials);
      
      await CTRL.deleteUser(req.user_id);
      res.status(200)
      .json({
          status: 200,
          message: 'Succesfully deleted user',
         })
    }
  } catch (status) {
    res.status(status).json({ status });
  }
})

// get a user using his user_id
router.get('/:user_id', JWT.verifyToken, async (req, res) => {
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

// get users that has the name ':search_query'
router.get('/search/:search_query', JWT.verifyToken, async (req, res) => {
  try {
    const users = await CTRL.searchUsersByName(req.params.search_query);

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