const Cervezas = require('../models/Cervezas')
const { ObjectId } = require('mongodb')

const search = (req, res) => {
  // api/cervezas/search?q=regaliz
  const q = req.query.q
  res.send({ mensaje: `Buscada la cerveza que contiene ${q}` })
}
const list = (req, res) => {
  // res.send({ mensaje: 'Lista de las cervezas' })
  Cervezas.find((err, cervezas) => {
    if (err) {
      res.status(500).send({}) // envio json vacio
    }
    res.status(200).send(cervezas) // envio la respuesta en si y el código status http
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
/* const show = (req, res) => {
  // api/cervezas/:id
  const id = req.params.id
  Cervezas.findById(id, (error, cerveza) => {
    if (error) res.send({ error })
    if (cerveza === null) return res.status(404).send({}) // o invertirlo o comprobar que sea null
    res.send(cerveza)
  })
  // res.send({ mensaje: `Buscada la cerveza que contiene ${id}` })
} */

/* const create = (req, res) => {
  res.send({ mensaje: 'Guardada cerveza' })
} */
const create = (req, res) => {
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
  res.send({ mensaje: 'Cerveza actualizada' })
}
const remove = (req, res) => {
  // api/cervezas/:id
  const id = req.params.id
  res.send({ mensaje: `Eliminada la cerveza que contiene ${id}` })
}

const cervezasController = {
  search,
  list,
  show,
  create,
  update,
  remove
}
module.exports = cervezasController
// alternativa exportar directamente los metodos porque el objeto las recibirá
/* module.exports = {
  search,
  list,
  show,
  create,
  update,
  remove
} */
