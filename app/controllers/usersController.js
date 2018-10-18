const User = require('../models/User') // mejor que fuese plurales
// const { ObjectId } = require('mongodb')

const create = (req, res) => {
  const { email, password } = req.body
  const user = new User({ email, password })

  /*   user.save((err, user) => {
    if (err) res.status(400).send({ error: err }) // error envio el status si hay error
    res.status(201).send(user) // devolvemos el usuarios como indica el standard.
  }) */
  const promiseSaveUser = user.save()
  promiseSaveUser
    .then(usuario => {
      user.generateAuthToken().then(token => {
        res
          .header('x-auth', token)
          .status(201)
          .send(usuario)
      }) // como genero el token envio el usuario y el token
    })
    .catch((err) => {
      res.status(400).send({ error: err })
    })
}

module.exports = {
  create

}
