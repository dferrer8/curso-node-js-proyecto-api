// const router = require('express').Router() Alternativa mas legible

const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')

// Crear un nuevo usuario y no debe ser autenticado
router.post('/', (req, res) => {
  usersController.create(req, res)
})

router.post('/login', (req, res) => {})

// mostrara lista usuarios
// debera ser autenticado
router.get('', (req, res) => {})

module.exports = router
