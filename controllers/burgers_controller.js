const Burger = require("../models/burger.js");
const ORM = require("../config/orm.js");
module.exports = {
  addBurger(name) {
    const burger = new Burger(name);
  },
  getBurgers() {},
};
