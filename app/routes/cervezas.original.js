const express = require('express')
// para establecer las distintas rutas, necesitamos instanciar el express router
const router = express.Router()

router.get('/', (req, res) => {
  res.json({ mensaje: '¡A beber cerveza!' })
})

router.post('/', (req, res) => {
  res.json({ mensaje: '¡Cerveza añadida!' })
})

router.delete('/:id', (req, res) => {
  res.json({ mensaje: `¡Cerveza ${req.params.id} borrada!` })
})

/* router.delete('/', (req, res) => {
  res.json({ mensaje: '¡Cerveza borrada!' })
}) */

module.exports = router
