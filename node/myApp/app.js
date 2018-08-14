let express = require('express');
let app = express();
let data = require('./data/data.json');
let catFacts = require('./data/catFacts.json');

app.set('catData', data);
app.set('catFacts', catFacts);
app.set('view engine', 'ejs');

app.use(express.static('public'));

//routes
app.use(require('./routes/index'));
app.use(require('./routes/catbreeds'))

app.listen(3000, () => {
    console.log("listening on port 3000");
});