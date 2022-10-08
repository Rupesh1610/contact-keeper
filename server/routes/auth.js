const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const { JWT_SECRET } = require('../config/key');
const router = express.Router();


router.post('/api/auth', [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }).exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(422).json({ msg: 'Invalid credentials' })
        }

        const payload = {
            user: {
                id: user._id
            }
        }
        const isMatched = await bcrypt.compare(password, user.password)
        if (!isMatched) {
            return res.status(422).json({ msg: 'Invalid credentials' })
        } else {
            jwt.sign(payload, JWT_SECRET, (err, token) => {
                if (err) throw err
                res.json({ token })
            })
        }

    } catch (err) {
        console.log(err);
    }

})

module.exports = router;