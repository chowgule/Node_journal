var fs = require("fs");

fs.readFile("names.txt", function(error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data.toString());
  }
  for (i = 0; i < 1000; i++) {
    i++;
  }
});

console.log("program has ended");
