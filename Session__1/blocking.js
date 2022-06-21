var fs = require("fs");

var data = fs.readFileSync("names.txt");

console.log(data.toString());

console.log("program has ended");
