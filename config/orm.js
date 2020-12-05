const Burger = require("../models/burger.js");
const mysql = require("mysql");

module.exports = {
  addBurger(name) {
    const burger = new Burger(name);
    console.log("orm new burger:", burger.getName());
  },
  getBurgers() {
    return [new Burger("cheese"), new Burger("turkey"), new Burger("veggie")];
  },
  consumeBurger(id) {
    const burger = new Burger("Eat Me!");
    burger.consume();
    console.log(burger);
  },
};
