const jwt = require('jsonwebtoken')
const data = { id: 1 }
const token = jwt.sign(data, 'privatePassword') // Firma
console.log(token)
const decoded = jwt.verify(token, 'privatePassword') // Verifica
console.log(decoded)
