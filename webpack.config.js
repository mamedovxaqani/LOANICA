const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "loanica",
      template: path.resolve(__dirname, "./src/template.html"),
      filename: "index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    rules: [
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: "asset/resource" },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },

  mode: "development",
  devServer: {
    port: 8080,
    open: true,
    hot: true,
  },
};
