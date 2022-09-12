const express = require('express')
const router = express.Router()
const adminData = require('./admin')
const path = require('path')

router.get('/', (req, res, next)=>{
    console.log(adminData.product)
    res.render('shop', { prods: adminData.product, pageTitle: 'Shop', path: '/'});
});

module.exports = router;