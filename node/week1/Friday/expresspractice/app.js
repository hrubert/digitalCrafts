let express = require("express");
let app = express();

app.get("/", function(request, response) {
    response.send("hello world")
})

app.get("/about", function(request, response) {
    response.send(`
    <h1>
    Lorem impsum dolor
    </h1>
    `)
})

app.get("/faq", function(request, response) {
    var name = request.params.name;
    response.send("frequently asked questions", name)
})


//create a server
app.listen(3000, function() {
    console.log("Listening on port 3000");
})