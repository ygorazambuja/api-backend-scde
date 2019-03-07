require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use((req, res, next) => {
  req.io = io
  return next()
})

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true
})

app.use(express.json())

app.use(require('./routes'))
app.use(cors)

server.listen(process.env.PORT || 3000)
