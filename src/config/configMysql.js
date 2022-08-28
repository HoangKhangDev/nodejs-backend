require("dotenv").config().parsed;
var mysql = require("mysql");

var con = mysql.createConnection({
  host: process.env.host_mysql,
  user: process.env.user_mysql,
  password: process.env.password_mysql,
  database: process.env.database_mysql,
});

module.exports=con;
