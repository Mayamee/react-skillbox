const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV == "development";
const IS_PROD = NODE_ENV == "production";

const setupDevTools = () => {
  if (IS_DEV) return "eval";
  if (IS_PROD) return false;
};

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  mode: NODE_ENV ? NODE_ENV : "development",
  entry: path.resolve(__dirname, "src/index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ["ts-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
    }),
  ],
  devServer: {
    port: 3000,
    open: true,
    hot: IS_DEV,
  },
  devtool: setupDevTools(),
};
