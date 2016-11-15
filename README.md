# Development

Here are the steps to run and work on this app locally.

1. From the the command line, navigate to a folder where you'd like to keep your local repo.
1. Run `git clone git@github.com:nathantbaker/webpack-testing.git`
1. Navigate to the app folder. `cd lib `
1. Run `npm install`
1. Step out of the app folder. `../` and run `webpack-dev-server --progress --colors`

The Webpack Dev Server automatically watches for changes and will live reload your work at [http://localhost:8080/webpack-dev-server/bundle](http://localhost:8080/webpack-dev-server/bundle).