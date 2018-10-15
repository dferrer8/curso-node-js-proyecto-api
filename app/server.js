const express = require('express') // llamamos a Express
const app = express()
const router = require('./routes') // OJO aqui entra por index que gestiona los sub-enrutados
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
app.use(morgan('combined'))
app.use(cors())

// requiero el fichero db pero no lo llamo en ningun sitio. No exporta nada. Es un trozo de codigo que he puesto en otro fichero solamente.
require('./db')

// configuración middlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// require('./addCerveza')

const port = process.env.PORT || 8080 // establecemos nuestro puerto

// nuestra ruta irá en http://localhost:8080/api
// es bueno que haya un prefijo, sobre todo por el tema de versiones de la API
app.use('/api', router)
/*  enrutados por versiones de la api
app.use('/apiv1', router)
app.use('/apiv2', router)
 */
app.get('/', (req, res) => {
  res.json({ mensaje: '¡Hola Mundo!' })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}!`) // lo usamos para cuando si que se haya levantado el servidor
})

console.log('API todavía no escuchando!!!')

module.exports = app
