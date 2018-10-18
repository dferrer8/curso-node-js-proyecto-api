const { SHA256 } = require('crypto-js')
const password = 'Esta es mi contraseña'
const hashedPassword = SHA256(password)
console.log(`Password: ${password}`)
console.log(`Hashed Password: ${hashedPassword}`)

const token = {
  data: { id: 5 },
  hash: 'añdalñdkfñadj añsdlfgjk añdlk añlfdj dfñjk jjafdkjdfdfk'
}

// cojo data y genero el hash con el secreto, si no coincide será erroneo o modificado
const resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString()
if (resultHash === token.hash) {
  console.log('Los datos no se han modificado')
} else {
  console.log(resultHash + ' \n Los datos están modificados, no se puede confiar')
}
