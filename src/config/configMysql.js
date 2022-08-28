require("dotenv").config().parsed;
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "y6aj3qju8efqj0w1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "nr84qci4y8ufhjh8",
  password: "hgqh6qrwddbjbqfs",
  database: "q88ay53kkgvlfn1j",
  port: 3306,
});
con.connect((err) => {
  if (err) throw err;
  console.log("connect success");
});
con.query(
  "create table  if not exists user (username varchar(255) not null, password varchar(255) not null)",
  (err) => {
    if (err) throw err;
    console.log("table created successfully");
  }
);

module.exports = con;
