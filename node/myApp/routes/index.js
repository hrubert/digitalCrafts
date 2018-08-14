let express = require('express');
let router = express.Router();

router.get("/", (req, res, next) => {
    let dataFile = req.app.get("catData");
   
    res.render('index', {
        randomCat: Math.floor(Math.random() * dataFile.breeds.length),
        catList: dataFile.breeds
    });
});

module.exports = router;