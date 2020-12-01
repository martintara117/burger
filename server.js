const express = require("express");
const app = express();
const path = require("path");
const handlebars = require("express-handlebars");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(express.json());
app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/api/getburgers", (req, res) => {
  res.json({});
});

app.post("/api/addburger", (req, res) => {
  res.json({});
});

app.listen(3000, () => {
  console.log("express listen on PORT 3000");
});
