const express = require("express");
const request = "request";
const app = express();

// Use CSS and IMG elements in public folder
app.use(express.static("Public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// Server has  initiated
app.listen(process.env.PORT || 3000, function () {
  console.log("Server started in http://localhost:3000");
});
