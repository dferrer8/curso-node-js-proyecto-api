var express = require('express') // llamamos a Express
var app = express()

var port = process.env.PORT || 8080 // establecemos nuestro puerto

// para establecer las distintas rutas, necesitamos instanciar el express router
var router = express.Router()

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
// nuestra ruta irá en http://localhost:8080/api
// es bueno que haya un prefijo, sobre todo por el tema de versiones de la API
app.use('/api', router)

app.get('/', (req, res) => {
  res.json({ mensaje: '¡Hola Mundo!' })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}!`) // lo usamos para cuando si que se haya levantado el servidor
})

console.log('API todavía no escuchando!!!')
