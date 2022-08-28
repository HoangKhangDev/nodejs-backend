const express = require("express");
const app = express();
const indexRoute = require("./routes/index");
const path = require("path");
var bodyParser = require("body-parser");
const session = require("express-session");
const JWTObject = require("./middleware/JWTAction");
// config
// app.use(
//   session({
//     resave: true,
//     saveUninitialized: true,
//     secret: "somesecret",
//     cookie: { maxAge: 60000 },
//   })
// );


app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

//set static file
app.set("views", __dirname + "/views/pages");
app.use("/static", express.static(path.join(__dirname, "src")));

// set the view engine to ejs
app.set("view engine", "ejs");

// route
app.use("/", indexRoute);

app.listen(3000, () => {
  console.log("listen to http://localhost:3000");
});
