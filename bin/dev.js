const webpack = require("webpack");
const [webpackClientConf, webpackServerConf] = require("../webpack.config.js");
const nodemon = require("nodemon");
const path = require("path");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const express = require("express");

const hmrServer = express();

const clientCompiler = webpack(webpackClientConf);

hmrServer.use(
  webpackDevMiddleware(clientCompiler, {
    publicPath: webpackClientConf.output.publicPath,
    serverSideRender: true,
    writeToDisk: true,
    stats: "errors-only",
  })
);
hmrServer.use(
  webpackHotMiddleware(clientCompiler, {
    path: "/static/__webpack_hmr",
  })
);

hmrServer.listen(3001, () => {
  console.log("HMR server listen on 3001 port");
});

const compiler = webpack(webpackServerConf);
compiler.watch({}, (err) => {
  if (err) {
    console.log("Compilation failed: ", err);
  }
  console.log("Compilation was succesful");
});
nodemon({
  script: path.resolve(__dirname, "../dist/server/server.js"),
  watch: [
    path.resolve(__dirname, "../dist/server"),
    path.resolve(__dirname, "../dist/client"),
  ],
});
