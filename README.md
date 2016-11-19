## Notes about Webpack

 Here are some notes about how this project uses Webpack.

1. Run `npm install` to download dependencies.
1. Run `webpack --watch` to compile the `dist/bundle.js` when something changes.
1. In another tab, run `webpack-dev-server`.

View the app at [http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/) and Webpack Dev Server will watches for changes and live-reload. `jshint` will also lint all javascript files on the fly in the tab you're running `webpack --watch`.