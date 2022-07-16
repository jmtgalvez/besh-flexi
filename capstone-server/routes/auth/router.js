const express = require('express');
const router = express.Router();

const CTRL = require('./controller')

router.post('/login', async(req, res) => {
    try {
        await CTRL.checkUserExists(req.body.email);

        await CTRL.login(req.body)
            .then( data => {
                const cookie_option = {
                    httpOnly: true,
                }
                res.cookie('access_token', data.access_token, cookie_option);
                res.status(200).json({
                    status: 200,
                    message: 'Login Success',
                    user: data.user,
                });
            });
    } catch (status) {
        res.status(status).json({
            status,
            message: 'Invalid username / email / password combination',
        });
    }
});

router.post('/register', async(req, res) => {
    try {
        await CTRL.checkUserAvailable(req.body.email);

        await CTRL.addUser(req.body)
            .then(user_id => {
                res.status(200).json({
                    status: 200,
                    message: 'Registration Success',
                    data: user_id
                });
            });
    } catch (status) {
        res.status(status).json({
            status: status,
            message: 'Invalid username / email',
        });
    }
});

module.exports = router;