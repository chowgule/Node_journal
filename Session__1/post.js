var express = require("express");

var app = express();

var mysql = require(mysql);

var con_obj = {
  user: "root",
  host: "localhost",
  password: "",
  database: "demo"
};

var con = mysql.createConnection(con_obj);

var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Welcome to my home page");
  res.end();
});

app.post("/", function(req, res) {
  console.log(req.body);
  var sum = req.body.num1 + req.body.num2;
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("The sum is " + sum);
  res.end();
});

con.connect(function(error) {
  if (error) throw error;
  console.log("Connected to database");
  console.log("running query");
  sql_query = "insert into student (name, roll_no, phone_no) values ? ? ?";

  var values = [[req.body.name, req.body.roll_no, req.body.phone_no]];

  con.query(sql_query, [values], function(error, result) {
    if (error) throw error;
    console.log("inserted records successfully!!!");
    console.log("Number of records inserted : " + result.affectedRows);
  });
});

app.listen(8080, function() {
  console.log("Server is online....");
});
