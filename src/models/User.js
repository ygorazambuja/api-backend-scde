const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true
    },
    login: String,
    email: {
      type: String,
      unique: true
    },
    password: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)
