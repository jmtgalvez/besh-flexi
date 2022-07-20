const jwt = require('jsonwebtoken');

exports.generateAccessToken = payload => {
    return jwt.sign(payload, 'capstone', { expiresIn: '1m' });
}

exports.generateRefreshToken = payload => {
    return jwt.sign(payload, 'capstoneSecret');
}

exports.verifyToken = (req, res, next) => {
    // get token
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token === null) return res.sendStatus(401);

    // verify correct user
    jwt.verify(token, 'capstone', (err, user) => {
        if (err) return res.sendStatus(403);
        // return user
        req.user = user;
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