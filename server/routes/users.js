const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const router = express.Router();

router.post('/api/users', [
    check('fullname', 'Please add name').not().isEmpty(),
    check('email', 'Please add a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        try {
            const { fullname, email, password } = req.body;

            let user = await User.findOne({ email });
            if (user) {
                return res.status(422).json({ msg: 'User already exists' })
            }

            const hashedPassword = await bcrypt.hash(password, 12);
            if (hashedPassword) {
                user = new User({
                    fullname,
                    email,
                    password: hashedPassword
                })
            }
            user.save().then(() => {
                res.json({ msg: 'Registered succesfully' })
            }).catch(err => console.log(err))
        } catch (err) {
            console.log(err);
        }


    })


module.exports = router