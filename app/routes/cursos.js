const express = require('express')
// para establecer las distintas rutas, necesitamos instanciar el express router
const router = express.Router()

router.get('/', (req, res) => {
  res.json({ mensaje: 'Curso inicial' })
})

router.post('/', (req, res) => {
  res.json({ mensaje: 'Curso añadido' })
})

router.delete('/', (req, res) => {
  res.json({ mensaje: 'Curso eliminado' })
})

module.exports = router
