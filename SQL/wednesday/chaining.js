var rp = require('request-promise');
var fsp = require('fs-promise');

function saveWebPage(url, filename) {
    new Promise(function(resolve, reject) {
        rp(url)
        .then(function(result) {
            fsp.writeFile(`${filename}.txt`, result)
        })
    });
}

saveWebPage('https://www.google.com/', 'cat');