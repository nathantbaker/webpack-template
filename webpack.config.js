module.exports = {
  // the first path enables hot reloading of the app
  entry: ["webpack/hot/dev-server" , "./js/controller.js"],
  output: {
    path: "./dist",
    publicPath: "/dist/",
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
