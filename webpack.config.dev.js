const { merge } = require("webpack-merge");
const common = require("./webpack.config.common");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  entry: "./demo/index.jsx",
  devtool: "eval-source-map",
  devServer: {
    static: path.resolve(__dirname, "demo"),
    compress: true,
    port: 3010,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./demo/index.html", // Usa una plantilla HTML en demo
    }),
  ],
});
