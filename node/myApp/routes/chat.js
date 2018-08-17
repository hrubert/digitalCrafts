let express = require('express');
let router = express.Router();
let io = require('socket.io');


router.get("/chat", (req, res) => {
    let dataFile = req.app.get("catData");    

    res.render('chat', {
        randNum: Math.floor(Math.random() * dataFile.breeds.legnth)
    });
});



module.exports = router;