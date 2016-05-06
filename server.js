import express from "express";
import path from "path";
import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";
import webpackConfig from "./webpack.config";

const APP_PORT = 3000;

webpackConfig.entry.app.unshift("webpack-dev-server/client?http://localhost:" + APP_PORT + "/", "webpack/hot/dev-server");
const compiler = webpack(webpackConfig);
const app = new WebpackDevServer(compiler, {
    hot: true,
    quiet: false,
    noInfo: false,
    stats: {
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
    }
});

// Serve static resources
app.use("/", express.static(path.resolve(__dirname, "dist")));
app.listen(APP_PORT, () => {
    console.log(`App is now running on http://localhost:${APP_PORT}`);
});
