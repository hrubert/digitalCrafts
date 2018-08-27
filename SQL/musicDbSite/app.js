var express = require('express');
var app = express();
var db = require('./routes/database.js');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/newalbum', (req, res) => {
    res.render('newalbum');
})

var server = app.listen(3000);

server.on('close', () => {
    db.end();
})