const Burger = require("../models/burger.js");
var connection = require("./connection.js");

module.exports = {
  addBurger(name) {
    var queryString = "INSERT INTO burgers (name, isConsumed) VALUES ?";
    connection.query(queryString, [name, false], function (err, result) {
      if (err) throw err;
      return true;
    });
  },
  getBurgers() {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      return result;
    });
  },
  consumeBurger(id) {
    const burger = new Burger("Eat Me!");
    burger.consume();
    console.log(burger);
  },
};
