var dotnet = require("dotenv").config().parsed;

var MongoClient = require("mongodb").MongoClient;
var url = dotnet.UrlMongoDB;

const create=(MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("test", function (err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
}))

module.exports=create;