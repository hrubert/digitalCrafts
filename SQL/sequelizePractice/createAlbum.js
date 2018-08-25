var db = require('./models');
const prompt = require('prompt-promise');
let res = [];

prompt("Album name? ")
    .then(val => {
        res.push(val);
        return prompt('Year released? ');
    })
    .then(val => {
        res.push(parseInt(val));
        return prompt('Artist id?: ');
    })
    .then(val => {
        res.push(parseInt(val));
        prompt.done();        
    })
    .then(val => {
        db.album2.create({albumName: res[0], year: res[1], ArtistID: res[2]});        
    })
    .catch(err => {
        console.log('error', err.stack);
        prompt.finish();
    })