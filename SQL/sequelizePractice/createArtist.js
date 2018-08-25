var db = require('./models');
const prompt = require('prompt-promise');
let res;

prompt("Artist name? ")
    .then(val => {
        res = val;
        prompt.done();
    })
    .then(val => {
            db.artist.create({
                    name: res
                })
                .then(val => {
                    db.artist.findAll({
                            where: {
                                name: res
                            }
                        })
                        .then(val => {
                            var r = val;
                            console.log("Created Artist with id " + r[0].id);
                        })
                })
            })
                .catch(err => {
                    console.log('error', err.stack);
                    prompt.finish();
                })




            //     db.user.findAll({where: {nickname: 'PDiddy'}})
            //   .then((results) => {
            //     var r = results[0];
            //     console.log(r.id, r.nickname);
            //   });