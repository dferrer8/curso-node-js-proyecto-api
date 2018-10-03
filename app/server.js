var express = require('express') // llamamos a Express
var app = express()

var port = process.env.PORT || 8080 // establecemos nuestro puerto

app.get('/', (req, res) => {
  res.json({ mensaje: '¡Hola Mundo!' })
})

app.get('/cervezas', (req, res) => {
  res.json({ mensaje: '¡A beber cerveza!' })
})

app.post('/cervezas', (req, res) => {
  res.json({ mensaje: '¡Cerveza añadida!' })
})

app.delete('/cervezas', (req, res) => {
  res.json({ mensaje: '¡Cerveza borrada!' })
})

// iniciamos nuestro servidor
// app.listen(port)
// console.log('API escuchando en el puerto ' + port)
app.listen(port, () => {
  console.log(`App listening on port ${port}!`) // lo usamos para cuando si que se haya levantado el servidor
})

console.log('API todavía no escuchando!!!')
