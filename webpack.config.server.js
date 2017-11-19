const path = require('path');
const nodeExternals = require('webpack-node-externals');

const config = require('./webpack.config.prod');

module.exports = {
  ...config,
  entry: ['babel-polyfill', './server/server.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.bundle.js',
  },
  target: 'node',
  externals: [nodeExternals({
    whitelist: [/react-widgets\/lib\/scss/],
  })],
};
