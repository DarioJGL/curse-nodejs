const fs = require('node:fs');

fs.readdir('./', (err, files) => {
    if (err) {
        throw err;
    }
    console.log(files);
}   );

    