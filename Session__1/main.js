var http = require("http");

var status_code = 200;

var server = http.createServer(function(req, res) {
  res.writeHead(status_code, { "Content-Type": "text/plain" });
  res.end("hello world");
});

server.listen(8080);

console.log("Server ready");
