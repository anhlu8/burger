var orm = require("../config/orm.js");

var burger = {
  selectAll: function (cb) {
    orm.selectAll(function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function (burger_name,cb) {
    orm.insertOne(burger_name, function (res) {
      cb(res);
    });
  },

  updateOne: function (burgerID, cb) {
    orm.updateOne(burgerID, function (res) {
      cb(res);
    });
  },
};
module.exports = burger;