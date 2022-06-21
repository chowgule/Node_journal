var express = require("express");

var app = express();

app.get("/", function(req, res) {
  res.send("you are in /");
});

app.get("/about", function(req, res) {
  res.send("you are in /about");
});

app.get("/home", function(req, res) {
  res.send("you are in /home");
});

app.listen(8080);

console.log("server is online");
