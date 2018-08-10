var fs = require('fs');
var path = require('path');
var filterFiles = require("./app6.js")

var ext = "." + process.argv[3];



fs.readdir(process.argv[2], filterFiles);