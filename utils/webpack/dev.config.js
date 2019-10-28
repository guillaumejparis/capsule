/* eslint-disable no-undef */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = require("./config")({
  mode: "development",
  output: {
    path: path.resolve(process.cwd(), "dist"),
    publicPath: "/capsule/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Capsule",
      favicon: "src/assets/favicon.ico"
    })
  ],
  devtool: "inline-source-map",
  devServer: {
    publicPath: "/capsule/",
    public: "localhost:8080/capsule",
    compress: true,
    hot: true
  }
});
