require("dotenv/config");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

const middleware = function (req, res, next) {
  next();
};

app.use(middleware);

app.get("/hello", middleware, function (req, res) {
  res.json("Merhaba, GET isteği attınız");
});

app.post("/hello", middleware, function (req, res) {
  console.log("Post iseği için istek gönderildi");
  res.json("Merhaba, POST isteği attınız");
});

app.put("/hello", middleware, function (req, res) {
  res.json("Merhaba, PUT isteği attınız");
});

app.delete("/hello", middleware, function (req, res) {
  res.json("Merhaba, DELETE isteği attınız");
});

app.listen(PORT, () => {
  console.log("Ready on http://localhost:" + PORT);
});
