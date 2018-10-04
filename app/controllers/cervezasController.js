const search = (req, res) => {
  // api/cervezas/search?q=regaliz
  const q = req.query.q
  res.send({ mensaje: `Buscada la cerveza que contiene ${q}` })
}
const list = (req, res) => {
  res.send({ mensaje: 'Lista de las cervezas' })
}
const show = (req, res) => {
  // api/cervezas/:id
  const id = req.params.id
  res.send({ mensaje: `Buscada la cerveza que contiene ${id}` })
}
const create = (req, res) => {
  res.send({ mensaje: 'Guardada cerveza' })
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
