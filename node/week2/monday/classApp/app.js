var express = require('express');
var app = express();
var reload = require('reload');

app.use(express.static('public'));
app.use(require('./routes/travis'));

app.get('/matt', function (req, res) {

    res.send(`Hello Matt`)
});

app.get('/cats(fancy)?', function (req, res) {
    var name = req.param("name");
    var last = req.param('last');
    // http://localhost:3000/cats?name=Tracy&last=Herbery to log a name
    res.send(`<h1>Hello ${name} ${last}</h1>`)
});

app.get('/books/:bookId', (req, res) => {
    var bookId = req.params.bookId;
    res.send(`Info for ${bookId}`);
})

var server = app.listen(3000, () => {
    console.log("running on port 3000");
});

reload(server);