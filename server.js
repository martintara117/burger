const express = require("express");
const app = express();
const path = require("path");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const controller = require("./controllers/burgers_controller.js");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/api/getburgers", (req, res) => {
  res.json(controller.getBurgers());
});

app.get("/api/consumeburger/:id", async (req, res) => {
  let id = req.params.id;
  await controller.consumeBurger(id);
  res.json(controller.getBurgers());
});

app.post("/api/addburger", async (req, res) => {
  const newBurgerName = req.body.name;
  await controller.addBurger(newBurgerName);
  res.json(controller.getBurgers());
});

app.listen(3000, () => {
  console.log("express listen on PORT 3000");
});
