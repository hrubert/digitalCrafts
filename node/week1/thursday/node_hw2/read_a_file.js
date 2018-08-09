var fs = require('fs');
var fileName = 'text.txt';

fs.readFile(fileName, (err, data) => {
    if (err) throw err;
    console.log(data.toString().toUpperCase());
})