let express = require('express');
let cors = require('cors');
let body_parser = require('body-parser');
let app = express();
let data = require('./data/data.json');
let catFacts = require('./data/catFacts.json');
let feedback = require('./data/contact.json')

app.use(cors());
app.use(body_parser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('catData', data);
app.set('catFacts', catFacts);
app.set('feedback', feedback);

app.use(express.static('public'));

//routes
app.use(require('./routes/index'));
app.use(require('./routes/catbreeds'));
app.use(require('./routes/contact'));
app.use(require('./routes/api'));
app.get("*", function (req, res) {
    res.render("error");
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});