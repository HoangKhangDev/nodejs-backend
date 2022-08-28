const express = require("express");
const router = express.Router();
const userRoute = require("./userRoute");
const loginRoute = require("./loginRoute");

var cookieSession = require("cookie-session");
const session = require("express-session");

const app = express();
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "somesecret",
    cookie: { maxAge: 60000 },
  })
);
router.use("/user", userRoute);
// define the home page route
router.use("/login", loginRoute);
router.get("/", (req, res) => {
  if (req.session) {
    res.render("home");
  }
  else{
    res.redirect("/login");
  }
});
router.get("/data", (req, res) => {
  res.send(data);
});
// define the about route
router.get("/about", (req, res) => {
  res.send("About birds");
});

module.exports = router;
