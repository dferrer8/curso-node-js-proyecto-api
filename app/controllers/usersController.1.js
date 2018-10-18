const User = require('../models/User') // mejor que fuese plurales
// const { ObjectId } = require('mongodb')

const create = (req, res) => {
  const { email, password } = req.body
  const user = new User({ email, password })
  user.save((err, user) => {
    if (err) res.status(400).send({ error: err }) // error envio el status si hay error
    res.status(201).send(user) // devolvemos el usuarios como indica el standard.
  })
}

module.exports = {
  create

}
