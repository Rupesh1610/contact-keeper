const express = require('express');
const requireLogin = require('../middleware/requireLogin');
const Contact = require('../models/Contact');
const { check, validationResult } = require('express-validator');
const router = express.Router();

router.post('/api/contact/new', [requireLogin, [
    check('fullname', 'Name is required').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    try {
        const newContact = new Contact(req.body)
        await newContact.save()
        res.send('Saved successfully')
    } catch (err) {
        console.log(err);
    }

})

router.get('/api/contacts', requireLogin, async (req, res) => {
    try {
        const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 })
        res.json(contacts)
    } catch (err) {
        console.log(err);
        res.status(500).send("server error")
    }
})

router.put('/api/contact/update/:id', requireLogin, async (req, res) => {
    try {
        let contact = await Contact.findById(req.params.id)
        if (!contact) {
            res.status(500).json({ msg: "contact not found" })
        }

        contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(contact)
    } catch (err) {
        console.log(err);
    }
})
router.delete('/api/contact/delete/:id', requireLogin, async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id)
        res.send('Contact deleted!')
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error')
    }
})


module.exports = router;