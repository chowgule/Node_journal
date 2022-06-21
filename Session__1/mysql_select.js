var mysql = require("mysql");

var con_object = {
  host: "localhost",
  user: "root",
  password: "",
  database: "demo"
};

var con = mysql.createConnection(con_object);
con.connect(function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected to Database");
    console.log("Running select query...");
    var sql_query = "select * from student";
    con.query(sql_query, function(err, result, fields) {
      if (err) throw err;
      console.log(JSON.parse(JSON.stringify(result)));
    });
  }
});
