var rp = require('request-promise');

var urls = ['https://en.wikipedia.org/wiki/Futures_and_promises', 'https://en.wikipedia.org/wiki/Continuation-passing_style', 'https://en.wikipedia.org/wiki/JavaScript', 'https://en.wikipedia.org/wiki/Node.js', 'https://en.wikipedia.org/wiki/Google_Chrome'];

var p1 = rp(urls[0]);
var p2 = rp(urls[1]);
var p3 = rp(urls[2]);
var p4 = rp(urls[3]);
var p5 = rp(urls[4]);

Promise.all([p1, p2, p3, p4, p5])
    .then(function (responses) {
        for (let i = 0; i < responses.length; i++) {
            console.log(responses[i]);
        }
    })
    .catch(function (err) {
        console.log(err);
    })