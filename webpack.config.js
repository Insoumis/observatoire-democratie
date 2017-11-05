const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: ['react-hot-loader/patch', './client/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'client.bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      actions: path.resolve(__dirname, 'common/actions/'),
      components: path.resolve(__dirname, 'common/components/'),
      containers: path.resolve(__dirname, 'common/containers/'),
      reducers: path.resolve(__dirname, 'common/reducers/'),
      styles: path.resolve(__dirname, 'common/styles/'),
      utility: path.resolve(__dirname, 'common/utility.js'),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new webpack.NamedModulesPlugin(),
  ],
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]__[local]--[hash:base64:5]',
            importLoaders: 1,
          },
        }, 'sass-loader'],
      }, {
        test: /\.s?css$/,
        include: /node_modules/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          },
        }, 'sass-loader'],
      }, {
        test: /\.(jpe?g|gif|png|svg|eot|woff|ttf)$/i,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/[name].[hash:8].[ext]',
        },
      },
    ],
  },
};
