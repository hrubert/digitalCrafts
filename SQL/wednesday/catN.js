var fsp = require('fs-promise');

function catN(fileArr, saveTo) {
    let promiseArr = [];

    for (let i = 0; i < fileArr.length; i++) {
        promiseArr.push(fsp.readFile(fileArr[i], {encoding: 'utf8'}))
    }

    Promise.all(promiseArr)
    .then(responses => {
        let text = '';
        for (let i = 0; i < responses.length; i++) {
            text += responses[i] + ' ';
        }
        fsp.writeFile(saveTo, text)
    })
}

catN (['f1.txt', 'f2.txt', 'f3.txt'], 'f4.txt');