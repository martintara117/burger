const Burger = require("../models/burger.js");
module.exports = {
  addBurger(name) {
    const burger = new Burger(name);
  },
  getBurgers() {},
};
