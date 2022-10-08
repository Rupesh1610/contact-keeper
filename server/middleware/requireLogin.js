const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/key');
const User = require('../models/user');


module.exports = (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        res.status(401).json({ msg: 'please login first' })
    }

    const token = authorization.replace('Bearer ', '');
    jwt.verify(token, JWT_SECRET, (err, payload) => {
        if (err) {
            res.status(401).json({ msg: 'Please login first' })
        }
        const { _id } = payload;
        User.findById(_id).then(loggedUser => {
            req.user = loggedUser;
            next()
        }).catch(err => console.log(err))
    })
}