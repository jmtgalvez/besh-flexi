const jwt = require('jsonwebtoken');

exports.generateAccessToken = payload => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1hr' });
}

exports.verifyToken = (req, res, next) => {
  // get token
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if ( token === null ) return res.sendStatus(401);
  
  // verify correct user
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    // return user
    req.user = user;
    next();
  });

}