var mysql = require("mysql");

var con_obj = {
  host: "localhost",
  user: "root",
  password: "",
  database: "demo"
};

var con = mysql.createConnection(con_obj);

con.connect(function(error) {
  if (error) throw error;
  console.log("Running query...");
  sql_query = "delete from student where student_id = 4";
  con.query(sql_query, function(err, result) {
    if (err) throw err;
    console.log("No. of records deleted : " + result.affectedRows);
  });
});
