var path = require("path");
var jsdom = require("jsdom").jsdom;
var webpackConfig = require("./webpack.config");

//Do Browser related setup.
global.document = jsdom("");
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === "undefined") {
        global[property] = document.defaultView[property];
    }
});

module.exports = {
    externals: {
        "cheerio": "window",
        "react/addons": true,
        "react/lib/ExecutionEnvironment": true,
        "react/lib/ReactContext": true
    },
    resolve: {
        alias: {
            "app": path.join(__dirname, "/app/")
        }
    },
    module: webpackConfig.module
};
