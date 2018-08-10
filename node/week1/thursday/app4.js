var fs = require('fs');
fs.readFile(process.argv[2], function (error, buffer) {
    if (error) {
        console.error(error.message);
        return;
    }
    console.log(buffer.toString().split("\n").length - 1);
})