const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const port = 3000;

// connecting with mongodb
mongoose.connect(
  "mongodb://localhost/blog-app",
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, connection) {
    if (err) throw err;
    else console.log("connected to mongodb");
  }
);

// it'll parse incoming requests with JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// It'll log api calls in console
app.use(morgan("dev"));

// using template engine ejs. It allows to use static template files
app.set("views", path.join(__dirname, "./server/views"));
app.set("view engine", "ejs");

app.use(cors());

// running the server
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
