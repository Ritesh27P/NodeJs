const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.set('views engine', 'ejs')
app.set('views', 'templates')
app.use(bodyParser.urlencoded({extended: false}))

const users = [];

app.get('/users', (req, res, next) =>{
    res.render('users.ejs', { pageTitle: 'Users'})
})

app.post('/added_user', (req, res, next) =>{
    users.push({ name: req.body.name})
    console.log(users);
    res.redirect('/')
})

app.get('/', (req, res, next) =>{
    // res.send('hii')
    res.render('home.ejs', {pageTitle: 'Home', users_list: users})
})


app.listen(3000)