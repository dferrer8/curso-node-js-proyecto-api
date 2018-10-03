const express = require('express')
// para establecer las distintas rutas, necesitamos instanciar el express router
const router = express.Router()

// establecemos nuestra primera ruta, mediante get.
router.get('/', (req, res) => {
  res.json({ mensaje: '¡Bienvenido a nuestra API!' })
})

router.get('/cervezas', (req, res) => {
  res.json({ mensaje: '¡A beber cerveza!' })
})

router.post('/cervezas', (req, res) => {
  res.json({ mensaje: '¡Cerveza añadida!' })
})

router.delete('/cervezas', (req, res) => {
  res.json({ mensaje: '¡Cerveza borrada!' })
})

module.exports = router
