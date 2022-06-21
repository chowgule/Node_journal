
var http = require("http");

var status_code = 200;

var json = {
  name: "john",
  city: "margao"
};

var server = http.createServer(function(req, res) {
  res.writeHead(status_code, { "Content-Type": "application/json" });
  res.end(json);
});

server.listen(8080);

console.log("Server ready");
