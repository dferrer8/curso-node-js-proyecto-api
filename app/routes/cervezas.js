const router = require('express').Router()
const cervezasController = require('../controllers/cervezasController')
// q como parametro
router.get('/search', (req, res) => {
  // res.json({ message: `Vas a buscar una cerveza que contiene ${req.query.q}` })
  cervezasController.search(req, res) // controladores
}) // ¡¡¡¡antes que la ruta GET /:id!!!!
router.get('/', (req, res) => {
  // res.json({ message: 'Estás conectado a la API. Recurso: cervezas' })
  cervezasController.list(req, res) // controladores
})
router.get('/:id', (req, res) => {
  // res.json({ message: `Vas a obtener la cerveza con id ${req.params.id}` })
  cervezasController.show(req, res) // controladores
})
router.post('/', (req, res) => {
  // res.json({ message: 'Vas a añadir una cerveza' })
  cervezasController.create(req, res)
})
router.put('/:id', (req, res) => {
  // res.json({ message: `Vas a actualizar la cerveza con id ${req.params.id}` })
  cervezasController.update(req, res)
})
router.delete('/:id', (req, res) => {
  // res.json({ message: `Vas a borrar la cerveza con id ${req.params.id}` })
  cervezasController.remove(req, res)
})
module.exports = router
