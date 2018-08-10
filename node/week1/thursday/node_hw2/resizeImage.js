var request = require("request");
var fs = require("fs");
var gm = require('gm');

var options = {
    url: "https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png",
    encoding: null
};

request(options, function (err, response, imageData) {
    if (err) {
        console.error(error.message);
        return;
    }
    fs.writeFile("img.png", imageData, function (error) {
        if (error) {
            console.error(error.message);
            return;
        }
        gm("img.png")
            .resize(240, 240)
            .write("img2.png", (err) => {
                if (err) {
                    console.log(err);
                }
            })

    })
});