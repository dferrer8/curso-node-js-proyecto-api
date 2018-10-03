const express = require('express') // llamamos a Express
const app = express()
const router = require('./routes')

const port = process.env.PORT || 8080 // establecemos nuestro puerto

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
