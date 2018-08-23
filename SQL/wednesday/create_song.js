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

prompt('Song name? ')
    .then(function (val) {
        res.push(val);
        return prompt('Duration? ');
    })
    .then(function (val) {
        res.push(val);
        return prompt('Songwriter? ');
    })
    .then(function (val) {
        res.push(val);
        prompt.done();       
    })
    .then(val => {
        db.result("INSERT INTO song(id, title, duration, songwriter)\
        VALUES(DEFAULT, $1, $2, $3)", [res[0], res[1], res[2]]);
    })
    .catch(function rejected(err) {
        console.log('error:', err.stack);
        prompt.finish();
});