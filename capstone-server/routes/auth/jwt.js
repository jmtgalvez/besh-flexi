const jwt = require('jsonwebtoken');

exports.generateAccessToken = payload => {
    return jwt.sign(payload, 'capstone', { expiresIn: '1hr' });
}

exports.generateRefreshToken = payload => {
    return jwt.sign(payload, 'capstoneSecret');
}

exports.verifyToken = (req, res, next) => {
    // get token
    // const authHeader = req.headers['authorization'];
    // const token = authHeader && authHeader.split(' ')[1];
    // if (token === null) return res.sendStatus(401);
    const access_token = req.body.access_token;

    // verify correct user
    jwt.verify(access_token, 'capstone', (err, user) => {
        if (err) return res.sendStatus(403);
        // return user
        req.user_id = user.user_id;
        next();
    });
}

exports.verifyRefreshToken = ( req, res, next ) => {
    const refresh_token = req.body.refresh_token;
    jwt.verify(refresh_token, 'capstoneSecret', (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    })
}