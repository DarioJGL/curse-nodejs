const fs = require('node:fs/promises');

console.log('Antes de leer el archivo');
const text = fs.readFile('./archivo.txt', 'utf-8')
    .then(text => console.log(text));
console.log('Después de leer el archivo');

