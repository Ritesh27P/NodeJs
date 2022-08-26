const { resolveSoa } = require('dns');
const http = require('http');
const express = require('express')

const app = express();

app.use( (req, res, next) =>{
    console.log('I am middleware')
})

app.use( (req, res, next)=>{
    console.log('I am another middleware')
})

const server = http.createServer(app);

server.listen(2000)
