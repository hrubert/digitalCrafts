const promise = require('bluebird');
const prompt = require('prompt-promise');
var res = [];

const initOptions = {
    promiseLib: promise
};

const config = {
    host: 'localhost',
    port: 5432,
    database: 'music',
    user: 'postgres'
};

const pgp = require('pg-promise')(initOptions);

const db = pgp(config);

// set-up above

prompt('Album name? ')
    .then(function albumName(val) {
        res.push(val);
        return prompt('Artist name? ');
    })
    .then(function artistName(val) {
        res.push(val);
        return prompt('release year? ');
    })
    .then(function releaseYear(val) {
        res.push(val);
        prompt.done();       
    })
    .then(val => {
        db.result("INSERT INTO album(id, title, artist, release_year)\
        VALUES(13, $1, $2, $3)", [res[0], res[1], res[2]]);
    })
    .catch(function rejected(err) {
        console.log('error:', err.stack);
        prompt.finish();
});