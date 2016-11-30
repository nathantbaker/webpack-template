## How to Run This App

In the root folder:

1. Run `npm install` to download dependencies.
1. Then run `npm run start` to load the app.

You will be sent to [http://localhost:9966/webpack-dev-server/](http://localhost:9966/webpack-dev-server/) where the app will load in a few seconds after `webpack-dev-server` boots up.

## Developement Environment

This app uses [Webpack](https://webpack.github.io/) to modularize code and automate tasks. NPM scripts are configured in the `package.json` file. They are being used so you can easily access commands of local node modules without having to install anything globally. Webpack is being configured in `webpack.config.js`.

### Webpack Dev Server
In this project, the Webpack Dev Server is configured to live-reload changes you make. It creates the latest version of the app on the fly, even though it does **not** compile code.
* **`npm run start`** Start Webpack Dev Server and be send to the URL where the app loads
* **`npm run stop`** Stop Webpack Dev Server
* **`npm run restart`** Stop and then start Webpack Dev Server
### Compile Code
* **`npm run build`** Export code to the `dist` folder.
* **`npm run buildwatch`** Automatically compile each time there is a change.
### Linting
`jshint` runs in the background and will halt watch functionality until code is lint free. You can supress specific errors across the project in the `js/.jshintrc` file.