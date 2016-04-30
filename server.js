import express from "express";
import path from "path";
import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";

const APP_PORT = 3000;
const CURRENT_MODULE = "session5";

const compiler = webpack({
    entry: {
        app: [
            "./app/" + CURRENT_MODULE + "/js/main.js",
            "webpack-dev-server/client?http://localhost:" + APP_PORT + "/",
            "webpack/hot/dev-server"
        ]
    },
    output: {
        path: __dirname,
        filename: "dist/bundle.js",
        publicPath: "/dist/"
    },
    devtool: "source-map",
    module: {
        preLoaders: [
            {
                test: /\.js?$/,
                loader: "eslint-loader",
                exclude: /(node_modules|bower_components)/
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel",
                query: {
                    presets: ["es2015", "stage-0", "react"]
                }
            }, {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
});
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
