const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/api/getburgers", (req, res) => {
  burger.all((data) => {
    console.log("controller get burgers", data);
    res.json(data);
  });
});

router.put("/api/consumeburger/:id", async (req, res) => {
  let id = req.params.id;
  burger.consume(id, () => {
    burger.all((data) => res.json(data));
  });
});

router.post("/api/addburger", async (req, res) => {
  const name = req.body.name;
  console.log("controller create burger", name);
  burger.create(name, () => {
    burger.all((data) => res.json(data));
  });
});

module.exports = router;
