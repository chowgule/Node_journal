var express = require("express");

var app = express();

var cors = require("cors");

var mysql = require("mysql");

var con_obj = {
  host: "localhost",
  user: "root",
  password: "",
  database: "bvoc"
};

var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(cors());

var con = mysql.createConnection(con_obj);

con.connect(function(error) {
  if (error) throw error;
  console.log("Connected to the database successfully...");
});

app.post("/", function(req, res) {
  res.send("Someone has requested the server");
  console.log("Connected to the Database");
  console.log("running queries....");
  console.log(req.body);

  var sql =
    "INSERT INTO student (roll_number, name, age) VALUES ('" +
    req.body.roll_number +
    "','" +
    req.body.name +
    "','" +
    req.body.age +
    "')";
  con.query(sql, function(error) {
    if (error) throw error;
    console.log("inserted data successfully...");
  });
});

app.get("/", function(req, res) {
  var sql = "select * from student";
  con.query(sql, function(error, result, fields) {
    if (error) throw error;
    console.log("selected data successfully");
    var my_result = JSON.parse(JSON.stringify(result));
    //console.log(my_result);
    res.send(my_result);
    res.end();
  });
});

app.put("/", function(req, res) {
  console.log(req.body);
  console.log("running queries..");
  var sql =
    'UPDATE student SET roll_number="' +
    req.body.roll_number +
    '", name="' +
    req.body.name +
    '", age="' +
    req.body.age +
    '" WHERE student_id="' +
    req.body.student_id +
    '"';
  con.query(sql, function(error) {
    if (error) throw error;
    console.log(req.body);
    console.log("updated data succesfully...");
  });
});

app.delete("/", function(req, res) {
  console.log(req.body);
  sql_query =
    'DELETE FROM student WHERE student_id="' + req.body.student_id + '"';
  console.log("running delete queries...");
  con.query(sql_query, function(error) {
    if (error) throw error;
    console.log(req.body);
    console.log("deleted data successfully...");
  });
});

app.listen(8080, function() {
  console.log("Server is online");
});
