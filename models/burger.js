var orm = require("../config/orm.js");

var burger = {
  selectAll: function (cb) {
    orm.selectAll(function (result) {
      cb(result);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function (burger_name,cb) {
    orm.insertOne(burger_name, function (result) {
      cb(result);
    });
  },

  updateOne: function (burgerID, cb) {
    orm.updateOne(burgerID, function (result) {
      cb(result);
    });
  },
};
module.exports = burger;