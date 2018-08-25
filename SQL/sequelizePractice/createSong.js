var db = require('./models');
const prompt = require('prompt-promise');
let res =[];

prompt("Song name? ")
    .then(val => {
        res.push(val);
        return prompt("How long is it? ");
    })
    .then(val => {
        res.push(val);
        return prompt("What is the album ID?");
    })
    .then(val => {
        res.push(val);
        prompt.done();
    })
    .then(val => {
            db.song2.create({
                    name: res[0],
                    duration: res[1],
                    albumID: parseInt(res[2])
                })
                .then(val => {
                    db.song2.findAll({
                            where: {
                                name: res[0]
                            }
                        })
                        .then(val => {
                            var r = val;
                            console.log("Created song with id " + r[0].id);
                        })
                })
            })
                .catch(err => {
                    console.log('error', err.stack);
                    prompt.finish();
                })