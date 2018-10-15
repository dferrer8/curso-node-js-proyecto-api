const Cervezas = require('../models/Cervezas')
const { ObjectId } = require('mongodb')

const search = (req, res) => {
  // api/cervezas/search?q=regaliz
  const q = req.query.q
  res.send({ mensaje: `Buscada la cerveza que contiene ${q}` })
}

const list = (req, res) => {
  Cervezas.find((err, cervezas) => {
    if (err) {
      res.status(500).send({})
    }
    res.status(200).send(cervezas)
  })
}

const show = (req, res) => {
  const id = req.params.id
  Cervezas.findOne({ _id: id }, (err, cerveza) => {
    if (!ObjectId.isValid(id)) {
      return res.status(404).send()
    }
    if (err) {
      return res.status(500).json({
        message: 'Se ha producido un error al obtener la cerveza'
      })
    }
    if (!cerveza) {
      return res.status(404).json({
        message: 'No tenemos esta cerveza'
      })
    }
    return res.json(cerveza)
  })
}
const create = (req, res) => {
  console.log('************')
  console.log(req.body)
  console.log('*****************')
  const cerveza = new Cervezas(req.body)
  cerveza.save((err, cerveza) => {
    if (err) {
      return res.status(400).json({
        message: 'Error al guardar la cerveza',
        error: err
      })
    }
    return res.status(201).json(cerveza)
  })
}

const update = (req, res) => {
  const id = req.params.id
  Cervezas.findOne({ _id: id }, (err, cerveza) => {
    if (!ObjectId.isValid(id)) {
      return res.status(404).send()
    }
    if (err) {
      return res.status(500).json({
        message: 'Se ha producido un error al guardar la cerveza',
        error: err
      })
    }
    if (!ObjectId.isValid(id)) {
      return res.status(404).send()
    }
    if (!cerveza) {
      return res.status(404).json({
        message: 'No hemos encontrado la cerveza'
      })
    }

    Object.assign(cerveza, req.body)

    cerveza.save((err, cerveza) => {
      if (err) {
        return res.status(500).json({
          message: 'Error al guardar la cerveza'
        })
      }
      if (!cerveza) {
        return res.status(404).json({
          message: 'No hemos encontrado la cerveza'
        })
      }
      return res.json(cerveza)
    })
  })
}
const remove = (req, res) => {
  // api/cervezas/:id
  const id = req.params.id
  res.send({ mensaje: `Buscada la cerveza que contiene ${id}` })
}

module.exports = {
  search,
  list,
  show,
  create,
  update,
  remove
}