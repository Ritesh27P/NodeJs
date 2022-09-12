const express = require('express')
const path = require('path')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const bodyParser = require('body-parser')


const app = express();
app.set('view engine', 'ejs');
app.set('views', 'templates');

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminRoutes.router);

app.use(shopRoutes)

app.use('/', (req, res, next)=>{
    res.status(404).render('404', { pageTitle: 'Page Not Found'})
})

app.listen(3000);