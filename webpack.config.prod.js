const { merge } = require("webpack-merge");
const common = require("./webpack.config.common");
const path = require("path");

module.exports = merge(common, {
  mode: "production",
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
      root: "ReactDOM",
    },
  },
  optimization: {
    minimize: true,
  },
});
