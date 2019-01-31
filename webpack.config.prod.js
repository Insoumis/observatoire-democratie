const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

const config = require("./webpack.config");

const env = {
  development: {
    BASE_URL: "http://dev.observatoire-democratie.fr",
    API_URL: "http://api.dev.observatoire-democratie.fr",
    SSR_PORT: 3030
  },
  production: {
    BASE_URL: "http://observatoire-democratie.fr",
    API_URL: "http://api.observatoire-democratie.fr:8123",
    SSR_PORT: 3000
  }
};

module.exports = {
  ...config,
  devtool: "source-map",
  entry: ["babel-polyfill", "./client/index.jsx"],
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      },
      BASE_URL: JSON.stringify(env[process.env.ENV].BASE_URL),
      API_URL: JSON.stringify(env[process.env.ENV].API_URL),
      SSR_PORT: JSON.stringify(env[process.env.ENV].SSR_PORT)
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true, // React doesn't support IE8
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      },
      sourceMap: true
    }),
    new ExtractTextPlugin("styles.css")
  ],
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                localIdentName: "[name]__[local]--[hash:base64:5]",
                importLoaders: 2
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: [autoprefixer]
              }
            },
            "sass-loader"
          ]
        })
      },
      {
        test: /\.s?css$/,
        include: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                importLoaders: 1
              }
            },
            "sass-loader"
          ]
        })
      },
      {
        test: /\.(jpe?g|gif|png|svg|eot|woff|ttf)$/i,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "assets/[name].[hash:8].[ext]"
        }
      },
      {
        test: /(favicon\.ico|manifest\.json|browserconfig\.xml)$/i,
        loader: "file-loader",
        options: { name: "assets/[name].[hash:8].[ext]" }
      }
    ]
  }
};
