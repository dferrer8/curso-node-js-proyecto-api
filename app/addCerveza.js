const Cerveza = require('./models/Cervezas')
// Ojo en ejemplo esta en singular y requiere poner nombre y no name:
const miCerveza = new Cerveza({ nombre: 'Ambar' })

miCerveza.save((err, miCerveza) => {
  if (err) return console.error(err)
  console.log(`Guardada en bbdd ${miCerveza.nombre}`)
})
