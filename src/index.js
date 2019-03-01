require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true
})

app.use(express.json())

app.use(require('./routes'))
app.use(cors)

app.listen(process.env.PORT || 3000)
