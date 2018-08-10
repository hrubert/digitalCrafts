var fs = require('fs');
var path = require('path');

var ext = "." + process.argv[3];

fs.readdir(process.argv[2], function(error, files) {
    if(error) {
        console.error(error.message);
        return;
    }
    for (let file of files) {
        if (path.extname(file) == ext) {
            console.log(file);
        }
    }
})