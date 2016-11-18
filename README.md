# Webpack Development

This is an example of structuring your files with [Webpack](https://webpack.github.io/). This is a barebones app that can be used to build out a project.

Here are some notes about using Webpack when running this app locally.

1. Navigate to the `app` folder and run `npm install`.
1. While still in `app`,  run `webpack --watch` to watch for changes and compile the `bundle.js` output file.
1. Step out of the app folder `../` and run `webpack-dev-server --output-public-path=/app/`
1. View your app at [http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/)

The Webpack Dev Server automatically watches for changes and live-reloads changes to this app's files.