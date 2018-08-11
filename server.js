var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var key = require("./password.js");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

var connection = mysql.createConnection({
    host: "localhost",
    port: key.portKey,
    user: key.userKey,
    password: key.passwordKey,
    database: "bamazon"
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });