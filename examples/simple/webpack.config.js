var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');


module.exports = {
  context: __dirname,
  entry: './assets/js/index',
  output: {
      path: path.resolve('./assets/bundles/'),
      filename: "[name]-[hash].js",
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

  module: {
    use: [
      // we pass the output from babel loader to react-hot loader
      { test: /\.jsx?$/, exclude: /node_modules/, use: [ 'babel-loader'], },
    ],
  },

  resolve: {
     
    extensions: ['.css', '.js', '.jsx']
  },
}
