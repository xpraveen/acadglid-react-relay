import express from "express";
import path from "path";
import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";
import webpackConfig from "./webpack.config";

const APP_PORT = 3000;

//Below clode will enable HMR
//webpackConfig.entry.app.unshift("webpack-dev-server/client?http://localhost:" + APP_PORT + "/", "webpack/hot/dev-server");

const compiler = webpack(webpackConfig);
const app = new WebpackDevServer(compiler, {
    hot: false,
    quiet: false,
    noInfo: false,
    stats: {
        assets: true,
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
