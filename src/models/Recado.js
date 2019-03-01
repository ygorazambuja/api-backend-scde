const mongoose = require('mongoose')

const RecadoSchema = new mongoose.Schema({
  author: String,
  content: String,
  createAt: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('Recado', RecadoSchema)
