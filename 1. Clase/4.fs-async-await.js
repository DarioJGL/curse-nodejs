const { readFile } = require('node:fs/promises');

(
    async() => {
        console.log('Antes de leer el archivo');
        const text = await readFile('./archivo.txt', 'utf-8');
        console.log(text);
        console.log('Después de leer el archivo');
    }
)();
    



