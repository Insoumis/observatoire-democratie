const path = require('path');

module.exports = {
  entry: ['./client/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'client.bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'common/components/'),
    },
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
};
