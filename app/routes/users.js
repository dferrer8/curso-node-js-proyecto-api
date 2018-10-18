const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')

// establecemos nuestra primera ruta, mediante get.
router.get('/', (req, res) => {
  res.json({ mensaje: '¡Bienvenido a nuestra API users!' })
})

module.exports = router
