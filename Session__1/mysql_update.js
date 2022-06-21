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
  sql_query = "update student set roll_no = 'VU172822' where student_id = 8";
  con.query(sql_query, function(err, result) {
    if (err) throw err;
    console.log("No. of record(s) updated : " + result.affectedRows);
  });
});
