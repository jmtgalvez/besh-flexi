const jwt = require('jsonwebtoken');

exports.generateAccessToken = payload => {
    return jwt.sign(payload, 'capstone', { expiresIn: '1hr' });
}

exports.generateRefreshToken = payload => {
    return jwt.sign(payload, 'capstoneSecret');
}

exports.verifyToken = (req, res, next) => {
    // get token
    if ( !req.headers.cookie ) return res.sendStatus(403);
    const cookies = [];
    req.headers.cookie.split(';').map( cookie => {
        const [key, value] = cookie.split('=');
        cookies[key.trim()] = value;
    });
    const access_token = cookies['access_token'];

    // verify correct user
    jwt.verify(access_token, 'capstone', (err, user) => {
        if (err) return res.sendStatus(403);
        // return user
        req.user_id = parseInt(user.user_id);
        next();
    });
}

exports.verifyRefreshToken = ( req, res, next ) => {
    if ( !req.headers.cookie ) return res.sendStatus(403);
    const cookies = [];
    req.headers.cookie.split(';').map( cookie => {
        const [key, value] = cookie.split('=');
        cookies[key.trim()] = value;
    });
    const refresh_token = cookies['refresh_token']; 
    
    jwt.verify(refresh_token, 'capstoneSecret', (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    })
}