const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    phone: {
        type: String
    },
    type: {
        type: String,
        default: 'personal'
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;

