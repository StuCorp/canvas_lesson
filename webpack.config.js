// webpack.config.js
var path = require("path"); // NEW

var config = {
  entry: "./build/index.js",
  output: {                 // NEW
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  }
};

module.exports = config;