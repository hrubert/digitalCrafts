let express = require('express');
let router = express.Router();
let _ = require('lodash');

router.get("/contact/?", (req, res, next) => {
    let dataFile = req.app.get("catData");
    let feedback = req.app.get("feedback");
    res.render('contact', {
        randNum: Math.floor(Math.random() * dataFile.breeds.length),
        feedback: _.takeRight(feedback, 3)     
    });
});

module.exports = router;