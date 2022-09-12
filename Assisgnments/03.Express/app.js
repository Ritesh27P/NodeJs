const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express();
app.use(express.static('public'));

app.use('/users', (req, res, next) =>{
    res.sendFile(path.join(__dirname, 'templates', 'users.html'));
})

app.use('/', (req, res, next) =>{
    res.sendFile(path.join(__dirname, 'templates', 'index.html'));
})

app.listen(3000);