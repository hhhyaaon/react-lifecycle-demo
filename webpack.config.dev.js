var webpack = require("webpack");
var webpackBase = require("./webpack.config.base.js");


var cfg = Object.assign(webpackBase, {
    devtool: "cheap-module-eval-source-map"
});

//entry
Object.getOwnPropertyNames((webpackBase.entry || {})).map(function (name) {
    cfg.entry[name] = []
        //.concat("webpack-hot-middleware/client.js")
        .concat("webpack/hot/dev-server")
        .concat("webpack-dev-server/client?http://localhost:9390")
        .concat(webpackBase.entry[name])
});

//plugins
cfg.plugins = (webpackBase.plugins || []).concat(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
)

module.exports = cfg;

