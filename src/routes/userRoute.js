const express = require("express");
const { connect } = require("../config/configMysql");
const router = express.Router();
const conn = require("../config/configMysql");
var kqua;
conn.connect((err) => {
  if (!err) {
    conn.query("select * from user", (error, result) => {
      kqua = result;
    });
  }
});
router
  .get("/:id", (req, res) => {
    if (req.params.id == 0000) {
      res.send("True");
    } else {
      res.send("False");
    }
    //   res.send(kqua);
  })
  .route("/")
  .get((req, res) => {
    console.log(req.query.sad);
    res.send("Page User");
  })
  .post((req, res) => {
    
    res.send(req.body);
  });

module.exports = router;
