var express = require('express');
var router = express.Router();
var body_parser = require('body-parser');
var fs = require('fs');
var data = require('../data/contact.json')


router.use(body_parser.urlencoded({
    extended: false
}));

router.use(body_parser.json());
router.get('/api', (req, res) => {
    res.json(data);
});

router.post('/api', function (req, res) {

    data.unshift(req.body);

    fs.writeFile('data/contact.json', JSON.stringify(data), 'utf8',
        function (error) {
            if (error) {
                console.error(error.message);
            }
        });

    res.json(data);
});

router.delete('/api/:id', function (req, res) {
    data.splice(req.params.id, 1);

    fs.writeFile('data/contact.json', JSON.stringify(data), 'utf8',
        function (error) {
            if (error) {
                console.error(error.message);
            }
        });

    res.json(data);
})

module.exports = router;