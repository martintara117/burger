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

const routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(3000, () => {
  console.log("express listen on PORT 3000");
});
