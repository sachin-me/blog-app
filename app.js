const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

// It loads environment variables from .env file
require("dotenv").config();

const port = process.env.PORT;

// connecting with mongodb
mongoose.connect(
  process.env.MONGO_URI,
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

app.use(express.static(path.join(__dirname, "public")));
// using template engine ejs. It allows to use static template files
app.set("views", path.join(__dirname, "./server/views"));
app.set("view engine", "ejs");

if (process.env.NODE_ENV === "development") {
  var webpack = require("webpack");
  var webpackConfig = require("./webpack.config");
  var compiler = webpack(webpackConfig);

  app.use(
    require("webpack-dev-middleware")(compiler, {
      publicPath: webpackConfig.output.publicPath,
    })
  );

  app.use(require("webpack-hot-middleware")(compiler));
}

// it allows cors
app.use(cors());

// All the API calls will go through route
app.use("/api", require("./server/routes/api"));
// It'll render index.ejs template on every routes
app.use("/", require("./server/routes/index"));

// running the server
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
