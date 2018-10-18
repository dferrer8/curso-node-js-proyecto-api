const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema
const jwt = require('jsonwebtoken')

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
})

UserSchema.methods.generateAuthToken = function () {
  const user = this
  const access = 'auth'
  const token = jwt
    .sign({ _id: user._id.toHexString(), access }, 'abc123').toString()
  user.tokens.push({ access, token })

  return user.save()
    .then(() => {
      return token
    })
}

const User = mongoose.model('User', UserSchema)
module.exports = User
