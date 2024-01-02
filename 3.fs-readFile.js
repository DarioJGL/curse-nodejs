const fs = require('node:fs');

console.log('Antes de leer el archivo');
const text = fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log(text)
});

console.log('Después de leer el archivo');

