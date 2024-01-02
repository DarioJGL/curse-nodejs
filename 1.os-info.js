const os = require('node:os')

console.log('Informacion del sistema operativo: ')

console.log('Sistema operativo: ', os.platform())
console.log('Version del sistema operativo: ', os.release())
console.log('Memoria total: ', os.totalmem() / 1024 / 1024 / 1024, 'GB')
console.log('Memoria libre: ', os.freemem() / 1024 / 1024, 'MB')
console.log('CPU: ', os.cpus())


