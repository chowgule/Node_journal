var fs = require("fs");

fs.readFile("names.txt", function(error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data.toString());
  }
});
