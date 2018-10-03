const express = require('express')
// para establecer las distintas rutas, necesitamos instanciar el express router
const router = express.Router()
const routerCervezas = require('./cervezas') // Importo el enroutador
const routerCursos = require('./cursos') // Importo el enroutador
// establecemos nuestra primera ruta, mediante get.
router.get('/', (req, res) => {
  res.json({ mensaje: '¡Bienvenido a nuestra API!' })
})

router.use('/cervezas', routerCervezas) // apunto al enrutador auxiliar de cervezas

router.use('/cursos', routerCursos) // apunto al enrutador auxiliar de cursos

module.exports = router
