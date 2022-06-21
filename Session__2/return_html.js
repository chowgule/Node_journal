var http = require("http");

var json ={
    name:"john",
    city:"margao"
};

http.createServer(function(res,req){
    res.writeHead(200,{"content-type": ""})
});

Server.listen(8080);

console.log("server ready");