const express = require('express');
const router = express.Router();

const JWT = require('./jwt');
const CTRL = require('./controller')

router.post('/login', async(req, res) => {
    try {
        await CTRL.checkUserExists(req.body.email);

        let user = await CTRL.login(req.body);

        const access_token = JWT.generateAccessToken({ user_id: user.user_id });
        const refresh_token = JWT.generateRefreshToken(user);
        user = { ...user };
        const cookie_option = {
            httpOnly: true,
        }
        res.cookie('access_token', access_token, cookie_option);
        res.cookie('refresh_token', refresh_token);
        res.status(200).json({
            status: 200,
            message: 'Login Success',
            user
        });
    } catch (status) {
        res.status(status).json({
            status,
            message: 'Invalid username / email / password combination',
        });
    }
});

router.post('/register', async (req, res) => {
    try {
        await CTRL.checkUserAvailable(req.body.email);

        const user_id = await CTRL.addUser(req.body);

        const credentials = {
            email: req.body.email,
            password: req.body.password,
        }

        let user = await CTRL.login(credentials);

        const access_token = JWT.generateAccessToken({ user_id: user.user_id });
        const refresh_token = JWT.generateRefreshToken(user);
        user = { ...user, access_token };
        const cookie_option = {
            httpOnly: true,
        }
        res.cookie('access_token', access_token, cookie_option);
        res.status(200).json({
            status: 200,
            message: 'Login Success',
            refresh_token,
            user
        });
    } catch (status) {
        res.status(status).json({
            status: status,
            message: 'Invalid username / email',
        });
    }
});

router.post('/getAccessToken', JWT.verifyRefreshToken, async (req, res) => {
    try {
        let user = await CTRL.checkUserExistsByUserId(req.user.user_id);

        const access_token = JWT.generateAccessToken({ user_id: user.user_id });
        user = { ...user };
        
        const cookie_option = {
            httpOnly: true,
        }
        res.cookie('access_token', access_token, cookie_option);
        res.status(200)
           .json({
                status: 200,
                message: 'New access_token',
                user
           });
    } catch (status) {

    }
});

router.post('/logout', JWT.verifyToken, (req, res) => {
    res.clearCookie('access_token').clearCookie('refresh_token').end();
});

module.exports = router;