const express = require("express");
const router = express.Router();
const conn = require("../config/configMysql");
// const mysql = require("mysql");

router
  .route("/")
  .get((req, res) => {
   
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
