const orm = require("../config/orm.js");
module.exports = {
  addBurger(name) {
    return orm.addBurger(name);
  },
  getBurgers() {
    return orm.getBurgers();
  },
  consumeBurger(id) {
    return orm.consumeBurger(id);
  },
};
