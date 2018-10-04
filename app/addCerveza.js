const Cerveza = require('./models/Cervezas')

const miCerveza = new Cerveza({ nombre: 'Ambar' })

miCerveza.save((err, miCerveza) => {
  if (err) return console.error(err)
  console.log(`Guardada en bbdd ${miCerveza.nombre}`)
})
