const express = require("express");
const bodyParser = require("body-parser");
const request = "request";
const https = require("https");
const { response } = require("express");
const { serialize } = require("v8");
const app = express();

// Server has  initiated
app.listen(process.env.PORT || 3000, function () {
  console.log("Server started in http://localhost:3000");
});

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

// POST METHOD TO SEND DATA
app.post("/", function (req, res) {
  const firstName = req.body.inputFirstName;
  const secondName = req.body.inputLastName;
  const email = req.body.inputEmail;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: secondName,
        },
      },
    ],
  };

  const jsonDATA = JSON.stringify(data);

  // Api ENDPOINT
  const url = "https://us10.api.mailchimp.com/3.0/lists/9b7aa05035";

  // API KEY
  const options = {
    method: "POST",
    auth: "jordan1:c6793e70506cf3395671d96c187e1775-us10",
  };

  const request = https.request(url, options, function (response) {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }
    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonDATA);
  request.end();
});

app.post("/failure.html", function (req, res) {
  res.redirect("/");
});

// API KEY
//c6793e70506cf3395671d96c187e1775-us10

// LIST ID
// 9b7aa05035
