class Burger {
  constructor(name) {
    this.name = name;
    this.isConsumed = false;
    this.id = Date.now();
  }
  getName() {
    return this.name;
  }
  getIsConsumed() {
    return this.isConsumed;
  }
  consume() {
    this.isConsumed = true;
  }
}
module.exports = Burger;
