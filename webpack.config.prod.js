import webpack from "webpack";

const PLUGIN_CONFIG = {
    "process.env.NODE_ENV": JSON.stringify("production")
};

module.exports = {
    entry: {
        app: ["./app/js/main.js"]
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
                    presets: [
                        "es2015", "stage-0", "react"
                    ],
                    plugins: [__dirname + "/plugins/babelRelayPlugin"]
                }
            }, {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin(PLUGIN_CONFIG),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
};
