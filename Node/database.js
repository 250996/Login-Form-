let mysql = require('mysql');
let express = require("express");
var cors = require('cors')
let app = express();

app.use(cors())

app.listen("9000",()=>{
console.log("working")
})

let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Harish25',
  database:"developscripts"
});

app.get("/projects",(req,res)=>{
connection.query('select * from users join projects on users.UserID = projects.UserID left join categories on categories.CategoryID = projects.CategoryID', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
  res.send(results)
});
})
app.get("/login",(req,res)=>{
connection.query('select * from login', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
  res.send(results)
});
})

// connection.end();


