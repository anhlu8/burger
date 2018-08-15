// Set up MySQL connection.
var mysql = require("mysql");
var key = require("../config/password.js");

var connection = mysql.createConnection({
  host: "localhost",
  port: key.portKey,
  user: key.userKey,
  password: key.passwordKey,
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
