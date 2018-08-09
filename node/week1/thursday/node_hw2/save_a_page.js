var request = require("request")
var readline = require('readline');
var fs = require('fs');
var htmlText = "";


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("URL: ", function (answer) {
    request.get(answer, (err, response, html) => {
        if (err) throw err;
        htmlText = html;
    });
    rl.close();
    saveText(htmlText);
});



function saveText(text) {
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("Save to: ", function (answer) {
        console.log(answer);
        fs.writeFile(answer, text, function (error) {
            if (error) {
                console.error(error.message);
                return;
            }
            console.log("File saved to " + answer);
        });
        rl.close();
    })
}