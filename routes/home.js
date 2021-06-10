const path = require('path')
const express = require('express')

const route = express.Router()
const rootDir = require('../utils/path')

route.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'home.html'))
})

module.exports = route