var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("Hello, world!");
});

app.get("/cats", function(req, res) {
    res.send("Meow!");
});

app.get("/dogs", function(req, res) {
    res.send("Woof!");
});

app.get("cats_and_dogs", function(req, res) {
    res.send("Living together")
})

app.get('/greet/:name', (req, res) => {
    res.send(`<h1>Hello, ${req.params.name}!`)
})

app.get("/year", (req, res) => {
    var age = req.query.age || 0;
    res.send(`You were born in ${2018 - age}.`)
})

app.listen(3000);