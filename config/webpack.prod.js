const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = {
  entry: {
    main: ["./src/main.js"]
  },
  mode: "production",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, use: [{ loader: MiniCSSExtractPlugin.loader }, { loader: "css-loader" }]},
      { test: /\.jpg$/, use: [
          {
            loader: "file-loader", options: {
              name: "images/[name].[ext]"
            }
          }
        ]
      },
      { test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              attrs: "[img:src]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new OptimizeCSSAssetsWebpackPlugin(),
    new MiniCSSExtractPlugin({
      filename: "[name]-[contenthash].css"
    }),
    new HTMLWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
