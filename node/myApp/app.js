let express = require('express');
let cors = require('cors');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let data = require('./data/data.json');
let catFacts = require('./data/catFacts.json');

app.use(cors());

app.set('view engine', 'ejs');
app.set('catData', data);
app.set('catFacts', catFacts);

app.use(express.static('public'));

//routes
app.use(require('./routes/index'));
app.use(require('./routes/catbreeds'));
app.use(require('./routes/contact'));
app.use(require('./routes/api'));
app.use(require('./routes/chat'));
app.get("*", function (req, res) {
    res.render("error");
});

// io.on('connection', function(socket){
//     io.emit('connection', msg);
//     socket.on('disconnect', function(){
//       console.log('user disconnected');
//     });
//   });

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});

http.listen(3000, () => {
    console.log("listening on port 3000");
});