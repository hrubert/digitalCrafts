let express = require('express');
let router = express.Router();
let _ = require('lodash');

router.get("/", (req, res, next) => {
    let dataFile = req.app.get("catData");
   
    res.render('index', {
        randomCat: _.random(0, dataFile.breeds.length - 1),
        catList: dataFile.breeds,
        randNum: _.random(0, dataFile.breeds.length - 1)          
    });
});

module.exports = router;