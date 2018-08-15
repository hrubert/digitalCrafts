let express = require('express');
let router = express.Router();

router.get("/contact/?", (req, res, next) => {
    let dataFile = req.app.get("catData");
    res.render('contact', {
        randNum: Math.floor(Math.random() * dataFile.breeds.length)          
    });
});

module.exports = router;