var mysql = require("mysql");
var key = require("../config/password.js");
var connection = mysql.createConnection({
  host: "localhost",
  port: key.portKey,
  user: key.userKey,
  password: key.passwordKey,
  database: "burgers_db"
});
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
module.exports = connection;
