var express = require('express');
var router = express.Router();

router.get('/Travis', function (req, res) {

    // res.send('Hello Travis')
    res.send("hello");
});

module.exports = router;