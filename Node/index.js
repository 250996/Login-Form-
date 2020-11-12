let sql = require("mysql");

let db = sql.createConnection({
    host:"localhost",
    user:"root",
    password:"Harish25",
    database:"developscripts"
});

db.connect()
connection.query('select * from project_tables', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

db.end()