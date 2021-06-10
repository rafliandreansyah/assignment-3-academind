const path = require('path')
const express = require('express')

const route = express.Router()
const rootDir = require('../utils/path')

route.get('/users', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'users.html'))
})

route.post('/users', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = route