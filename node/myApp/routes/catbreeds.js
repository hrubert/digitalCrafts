let express = require('express');
let router = express.Router();
let _ = require('lodash');


router.get("/breeds/?", (req, res) => {
    let dataFile = req.app.get("catData");

    res.render('allCats', {
        catList: dataFile.breeds,
        randNum: _.random(0, dataFile.breeds.length - 1)  
    })
})

router.get("/breeds/:breedID", (req, res) => {
    let dataFile = req.app.get("catData");
    let catFacts = req.app.get("catFacts");

    res.render('oneCat', {
        oneCat: dataFile.breeds[req.params.breedID],
        catFact: _.sample(catFacts),
        randNum: _.random(0, dataFile.breeds.length - 1)  
    })
});

module.exports = router;