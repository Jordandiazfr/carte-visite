const express = require("express");
const bodyParser = require("body-parser");
const request = "request";
const https = require("https");
const { response } = require("express");
const app = express();

app.set("view engine", "ejs");
// Use CSS and IMG elements in public folder
app.use(express.static("Public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/work/forest", function (req, res) {
  res.sendFile(__dirname + "/items/forest.html");
});

app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/items/About.html");
});

app.get("/singup", function (req, res) {
  res.sendFile(__dirname + "/singup.html");
});

app.use(bodyParser.urlencoded({ extended: true }));

const jsonDATA = JSON.stringify(data);

// Server has  initiated
app.listen(process.env.PORT || 3000, function () {
  console.log("Server started in http://localhost:3000");
});
