const path = require('path');

const config = require('./webpack.config');

module.exports = {
  ...config,
  entry: ['babel-polyfill', './client/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'client.bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
};
