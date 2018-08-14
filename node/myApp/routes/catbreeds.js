let express = require('express');
let router = express.Router();

router.get("/breeds/?", (req, res) => {
    let dataFile = req.app.get("catData");

    res.render('allCats', {
        catList: dataFile.breeds,
        randNum: Math.floor(Math.random() * dataFile.breeds.length)  
    })
})

router.get("/breeds/:breedID", (req, res) => {
    let dataFile = req.app.get("catData");
    let catFacts = req.app.get("catFacts");

    res.render('oneCat', {
        oneCat: dataFile.breeds[req.params.breedID],
        catFact: catFacts[Math.floor(Math.random() * catFacts.length)],
        randNum: Math.floor(Math.random() * dataFile.breeds.length)
    })
});

module.exports = router;