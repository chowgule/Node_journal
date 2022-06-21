var fs = require("fs");

var data = "hello world";
fs.writeFile("names.txt", data, function(error) {
  if (error) {
    console.log(error);
  }
});
