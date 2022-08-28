const express = require("express");
const router = express.Router();
// const conn = require("../config/configMysql");
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "id18646802_admin",
  password: "HoangKhang19032%",
  database: "id18646802_backend_sql",
});
router
  .route("/")
  .get((req, res) => {
    connection.connect((error) => {
      if (error) {
        console.log(error);
      }
    });
    res.render("login", { title: "Login" });
  })
  .post((req, res) => {
    // console.log(req.body.username == "admin" && req.body.password == "admin");
    // if (req.body.username == "admin" && req.body.password == "admin") {
    //   req.session.user = { username: "admin", password: "admin" };
    res.redirect("/trangchu");
    // }
  });
router.route("/get").get((req, res) => {
  res.redirect("/login");
});

module.exports = router;
