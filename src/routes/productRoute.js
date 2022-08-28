const express = require("express");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("Product Page");
  })
  .post((req, res) => {});
// define the about route
router.get("/about", (req, res) => {
  res.send("User About birds");
});

module.exports = router;
