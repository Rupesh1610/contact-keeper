const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/contactKeeper')
    .then(() => console.log('connected'))
    .catch(err => console.log(err))

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/users'))
app.use(require('./routes/contacts'))


app.listen(5000, () => console.log("server is running on port 5000"))