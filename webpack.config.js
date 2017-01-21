/* eslint-disable */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractCSS = new ExtractTextPlugin('[name].bundle.css');

module.exports = {
  entry: ['./app/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/app'
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }, {
        // Only run `.js` files through Babel
        test: /\.js?$/,
        loader: "babel-loader",

        // Skip any files outside of your project's `app` directory
        include: [path.resolve(__dirname, "app")]
      }, {
        test: /\.(css|scss)$/i,
        exclude: /node_modules/,
        loader: extractCSS.extract({
          fallbackLoader: "style-loader",
          loader: ['css-loader', 'sass-loader']
        })
      }, {
        test: /\.handlebars$/,
        loader: "handlebars-loader"
      }
    ]
  },
  plugins: [extractCSS]
};