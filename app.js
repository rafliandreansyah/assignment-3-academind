const path = require('path')

const express = require('express')

const homeRoute = require('./routes/home')
const userRoute = require('./routes/users')

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')))

app.all('*', homeRoute, userRoute)

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000)
