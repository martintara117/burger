const express = require("express");
const app = express();
const path = require("path");
const handlebars = require(express.handlebars);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});
