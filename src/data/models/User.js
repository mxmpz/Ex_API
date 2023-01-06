const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+@.+\..+/
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String
  }
}, { timestamps: true })

module.exports = mongoose.models.User || mongoose.model('User', userSchema)
