const path = require('path');
var webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: './scripts/frontend/index.js',
  output: {
    path: path.resolve(__dirname, 'static', 'javascripts'),
    filename: './bundle.js'
  },
  resolve: {
    extensions: ['.js', '*']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      }
    ]
  },
  devtool: 'source-maps'
};