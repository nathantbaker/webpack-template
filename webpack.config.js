let ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

  // "webpack/hot/dev-server" in entry enables hot reloading of the app. Remove this before pushing to production. Here's a copy of the original line:

  // entry: ["webpack/hot/dev-server", "./js/controller.js"],

  entry: ["webpack/hot/dev-server" , "./js/controller.js"],
  output: {
    path: "./dist",
    publicPath: "http://localhost:9966/webpack-dev-server/",
    filename: 'bundle.js'
  },
  module: {
    preLoaders:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "jshint-loader"
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  resolve: {
    alias: {
      // used when requiring jquery in modules
      'jquery-path': '../node_modules/jquery/src/jquery.js'
    }
  }
};
