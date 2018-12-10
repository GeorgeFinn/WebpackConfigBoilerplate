const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require("compression-webpack-plugin")
const BrotliPlugin = require("brotli-webpack-plugin")

module.exports = env => {
    return {
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
        {
          test: /\.css$/,
          use: [
            { loader: MiniCSSExtractPlugin.loader },
            { loader: "css-loader" }
          ]
        },
        {
          test: /\.jpg$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "images/[name].[ext]"
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCSSExtractPlugin(),
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require("cssnano"),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true
      }),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(env.NODE_ENV)
        }
      }),
      new HTMLWebpackPlugin({
        template: "./src/index.ejs",
        inject: true,
        title: "Link's Journal"
      }),
      new UglifyJSPlugin(),
      new CompressionPlugin({
        algorithm: "gzip"
      }),
      new BrotliPlugin()
    ]
  };
}
