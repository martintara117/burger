const orm = require("../config/orm.js");

const burger = {
  all: function (cb) {
    orm.all("burgers", cb);
  },
  // The variables cols and vals are arrays.
  create: function (name, cb) {
    orm.create("burgers", ["name", "isConsumed"], [name, false], cb);
  },
  consume: function (id, cb) {
    orm.update("burgers", { isConsumed: true }, `id = ${id}`, cb);
  },
};

module.exports = burger;
