var fsp = require('fs-promise');

function catTwo(file1, file2, saveTo) {
    var f1 = fsp.readFile(file1, {encoding: 'utf8'});
    var f2 = fsp.readFile(file2, {encoding: 'utf8'});    

    Promise.all([f1, f2])
    .then(responses => {
        fsp.writeFile(saveTo, responses[0] + " " + responses[1])
    })
}

catTwo ('f1.txt', 'f2.txt', 'f3.txt');